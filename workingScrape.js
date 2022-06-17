const puppeteer = require('puppeteer');
const fs = require('fs');



(async () => {

    const highPrices = [];


    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.coingecko.com/en/coins/bitcoin');
    const btcPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/ethereum');
    const ethPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/near');
    const nearPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/bnb');
    const bnbPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/cardano');
    const adaPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/xrp');
    const xrpPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/solana');
    const solPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })

    await page.goto('https://www.coingecko.com/en/coins/avalanche');
    const avaxPrice = await page.evaluate(() => {
        return Array.from(document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent)
    })


    // CONVERTED TO NUMBER, BUT FS MAKES IT NULL
    // const coinPrice = [btcPrice, ethPrice, bnbPrice, adaPrice, xrpPrice, solPrice, avaxPrice, nearPrice]
    //  await coinPrice.map(a =>  highPrices.push(parseInt(a.join(''), 10)) )
    //  await console.log(typeof highPrices[0])

  

    //await highPrices.push(btcPrice, ethPrice)
    await highPrices.push(btcPrice, ethPrice, bnbPrice, adaPrice, xrpPrice, solPrice, avaxPrice, nearPrice)



    await fs.writeFileSync('./scrapedData/highPrices.json', JSON.stringify(highPrices, null, 2))




    await browser.close();


})();

