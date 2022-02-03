const express = require('express')
const path = require('path')
const { env } = require('process')
const app = express()

const HEADS = "heads"
const TAILS = "tails"
const PORT = 8000

coinflip = {
    heads: {
        coinValue: "heads"
    },
    tails: {
        coinValue: "tails"
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
}).listen(process.env.PORT || PORT)

app.get('/api/coinflip', (req, res) => {
    var flipped = ''
    if (Math.floor(Math.random()*2) < 1) {
        flipped = HEADS
    } else {
        flipped = TAILS
    }
    res.json(coinflip[flipped])
    console.log(flipped)

})