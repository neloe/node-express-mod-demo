const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is the default endpoint. what a silly message')
})

app.get('/about',(req, res) => {
    res.send('This is the about endpoint. Here is some useful information')
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})