const { Cluster } = require('puppeteer-cluster');

(async () => {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 10,
        puppeteerOptions: {
            headless: false,
            defaultViewport: false,
            //userDataDir: "./scrappedData"
        }
    });


    const urls = ['https://www.coingecko.com/en/coins/bitcoin', 'https://www.coingecko.com/en/coins/ethereum', 'https://www.coingecko.com/en/coins/bnb']
    //const coins = ['bitcoin', 'ethereum', 'bnb', 'cardano', 'xrp', 'solana', 'polkadot', 'tron', 'avalanche',]


    cluster.queue(async ({ page, data: url }) => {
        await page.goto(url);

        const prices = [];

        //await page.goto('https://www.coingecko.com/en/coins/bitcoin');

        const btcPrice = await page.evaluate(() => {
            return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
        })



        //await page.goto('https://www.coingecko.com/en/coins/ethereum');

        const ethPrice = await page.evaluate(() => {
            return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
        })

        const bnbPrice = await page.evaluate(() => {
            return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
        })


        await prices.push(btcPrice, ethPrice, bnbPrice )


    });


    for (const url of urls) {
        await cluster.queue(url)
    }




    // await cluster.task(async ({ page, data: url }, ) => {
    //     await page.goto(url);

    //     const btcPrice = await page.evaluate(() => {
    //         return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    //     })

    //     const ethPrice = await page.evaluate(() => {
    //         return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    //     })

    //     const bnbPrice = await page.evaluate(() => {
    //         return document.querySelector('table > tbody > tr:nth-child(9) > td > span > span.no-wrap').textContent
    //     })

    // });









    await cluster.idle();
    await cluster.close();
})();