const express = require('express');
const app = express();
const PORT = 5555;

const highPrice = require('./scrapedData/highPrices.json')
const currentPrice = require('./scrapedData/currentPrices.json')

app.get('/highPrice', (req, res) => {
    res.json({highPrice})
})

app.get('/currentPrice', (req, res) => {
    res.json({currentPrice})
})






app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`)
})