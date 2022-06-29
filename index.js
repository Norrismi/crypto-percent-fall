const express = require('express');
const app = express();
const PORT = 5555;
const puppeteer = require('puppeteer');
const fs = require('fs');
const cron = require('node-cron');

const highPrice = require('./scrapedData/highPrices.json')
const currentPrice = require('./scrapedData/currentPrices.json')

app.get('/highPrice', (req, res) => {
    res.json({highPrice})
})



    app.get('/currentPrice', (req, res) => {
        res.json({currentPrice})
    })





cron.schedule('*/2 * * * *', () => {
    getPrices()
    console.log('running a task every 1 minute');
})

    const getPrices = async () => {
    
        const highPrices = [];
    
    
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
    
        await page.goto('https://www.coingecko.com/en/coins/bitcoin');
        const btcPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/ethereum');
        const ethPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/near');
        const nearPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/bnb');
        const bnbPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/cardano');
        const adaPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/xrp');
        const xrpPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/solana');
        const solPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
        await page.goto('https://www.coingecko.com/en/coins/avalanche');
        const avaxPrice = await page.evaluate(() => {
            return Array.from(document.querySelector('tr:nth-child(1) td span span').textContent)
        })
    
    
    
        highPrices.push(btcPrice, ethPrice, bnbPrice, adaPrice, xrpPrice, solPrice, avaxPrice, nearPrice)
    
        console.log(highPrices)
    
        fs.writeFileSync('./scrapedData/currentPrices.json', JSON.stringify(highPrices, null, 2))
    
        await browser.close();
    
    
    };









app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`)
})