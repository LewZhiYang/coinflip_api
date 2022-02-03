const express = require('express')
const path = require('path')
const app = express()

const HEADS = "heads"
const TAILS = "tails"

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
}).listen(8000)

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