require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send("Adeebshekh00")
})

app.get('/login',(req,res) => {
    res.send("Please fill ur credentials")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})