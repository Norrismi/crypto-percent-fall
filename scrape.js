const puppeteer = require('puppeteer');
const fs = require('fs');



(async () => {

    
    //const coins = ['https://www.coingecko.com/en/coins/bitcoin', 'https://www.coingecko.com/en/coins/ethereum', 'https://www.coingecko.com/en/coins/bnb' ]
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // await coins.map(async (coin) => {
        //     const highPrices = [];
        //     await page.goto(`https://www.coingecko.com/en/coins/${coin}`);
    //     await page.evaluate(() => {
        //         highPrices.push(
            //             document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
            //         ) 
            //     })
            // })
            
            const coins = ['bitcoin', 'ethereum', 'bnb','cardano', 'xrp','solana', 'polkadot', 'tron', 'avalanche',  ]
            
            for(i=0; i<coins.length; i++){
        const url = `https://www.coingecko.com/en/coins/${coins[i]}`
        console.log(url)
    }
    
    // await page.evaluate(() => {
    //     const highPrices = [];
    //      highPrices.push(
    //         document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    //     ) 
    // })






    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();


    // await coins.map((coin) => {
    //     await page.goto(`https://www.coingecko.com/en/coins/${coin}`);
    //     await page.evaluate(() => {
    //         highPrices.push(
    //             document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    //         ) 
    //     })
    // })


    // const asyncRes = await Promise.all(arr.map(async (i) => {
    //     await sleep(10);
    //     return i + 1;
    // }));



    // await page.goto('https://www.coingecko.com/en/coins/bitcoin');
    // const btcPrice = await page.evaluate(() => {
    //     return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    // })


    // await page.goto('https://www.coingecko.com/en/coins/ethereum');
    // const ethPrice = await page.evaluate(() => {
    //     return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    // })


    // await page.goto('https://www.coingecko.com/en/coins/bnb');
    // const bnbPrice = await page.evaluate(() => {
    //     return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    // })


    // await highPrices.push(btcPrice, ethPrice, bnbPrice)
     console.log(highPrices)


    await fs.writeFileSync('./scrappedData/high.json', JSON.stringify(btcPrice, null, 2))


    await browser.close();



    // const propertyPrice = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("span.homecardV2Price")).map(priceElem => priceElem.textContent)
    // })

    // const propertyLocation = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("div.homeAddressV2 span")).map(locationElem => locationElem.textContent)
    // })

    // const propertySqft = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(3)")).map(sqftElem => sqftElem.textContent)
    // })

    // const propertyBeds = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(1)")).map(bedElem => bedElem.textContent)
    // })

    // const propertyBaths = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(2)")).map(bathElem => bathElem.textContent)
    // })


    // await fs.writeFileSync('./scrappedData/price.json', JSON.stringify(propertyPrice, null, 2))
    // await fs.writeFileSync('./scrappedData/address.json', JSON.stringify(propertyLocation, null, 1))
    // await fs.writeFileSync('./scrappedData/sqft.json', JSON.stringify(propertySqft, null, 1))
    // await fs.writeFileSync('./scrappedData/beds.json', JSON.stringify(propertyBeds, null, 1))
    // await fs.writeFileSync('./scrappedData/baths.json', JSON.stringify(propertyBaths, null, 1))

    // await browser.close();

})();
