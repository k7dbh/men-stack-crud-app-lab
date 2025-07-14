require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

app.get('/',(req,res) => {
    res.render('index.ejs')
})

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3000, () => {
    console.log('Listen on port 3000')
})