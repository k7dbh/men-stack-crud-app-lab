const express = require('express')
const router = express.Router()
//
const Car = require('../models/cars')
// 

// TEST ROUTE
router.get('/', async (req,res) => {
    const allCars = await Car.find()
    console.log('allCars: ', allCars)
    res.render('cars/index.ejs', {allCars});
})

router.get('/new', (req,res) => {
    res.render('cars/new.ejs')
})

router.post('/', async (req,res) => {
    if(req.body.isVerified === 'on'){
        req.body.isVerified = true
    }else{
        req.body.isVerified = false
    }
    console.log(req.body)
    await Car.create(req.body)
    res.redirect('/cars')
})

//show one business
router.get('/:carId', async (req, res) => {
    const foundCar = await Car.findById(req.params.carId)
    res.render('cars/show.ejs',{
        foundCar
    })
})

module.exports = router