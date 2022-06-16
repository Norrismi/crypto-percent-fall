const puppeteer = require('puppeteer');
const fs = require('fs');



(async () => {

    const highPrices = [];


    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.coingecko.com/en/coins/bitcoin');
    const btcPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/ethereum');
    const ethPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/bnb');
    const bnbPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/cardano');
    const adaPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/xrp');
    const xrpPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/solana');
    const solPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/polkadot');
    const dotPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/tron');
    const tronPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/avalanche');
    const avaxPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })

    await page.goto('https://www.coingecko.com/en/coins/near');
    const nearPrice = await page.evaluate(() => {
        return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    })


    await highPrices.push(btcPrice, ethPrice, bnbPrice, adaPrice, xrpPrice, solPrice, dotPrice, tronPrice, avaxPrice, nearPrice)


    console.log(highPrices)



    await fs.writeFileSync('./scrapedData/highPrices.json', JSON.stringify(highPrices, null, 2))


    await browser.close();


})();

