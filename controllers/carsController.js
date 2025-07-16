const express = require('express');
const router = express.Router();

const Car = require('../models/cars');

// TEST ROUTE
router.get('/', async (req, res) => {
  const allCars = await Car.find();
  res.render('cars/index.ejs', { allCars });
});

router.get('/new', (req, res) => {
  res.render('cars/new.ejs');
});

router.post('/', async (req, res) => {
  req.body.isVerified = req.body.isVerified === 'on';
  await Car.create(req.body);
  res.redirect('/cars');
});

// show one car
router.get('/:carId', async (req, res) => {
  const foundCar = await Car.findById(req.params.carId);
  res.render('cars/show.ejs', { foundCar });
});

// delete a car
router.delete('/:carId', async (req, res) => {
  await Car.findByIdAndDelete(req.params.carId);
  res.redirect('/cars');
});

// get edit form
router.get('/:carId/edit', async (req, res) => {
  const foundCar = await Car.findById(req.params.carId);
  res.render('cars/edit.ejs', { foundCar });
});

// update a car
router.put('/:carId', async (req, res) => {
  req.body.isVerified = req.body.isVerified === 'on';
  await Car.findByIdAndUpdate(req.params.carId, req.body, { new: true });
  res.redirect(`/cars/${req.params.carId}`);
});

module.exports = router;
