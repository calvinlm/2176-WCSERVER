const express = require('express');
const customerRoute = express.Router();
const CustomerModel = require('../models/Customer');

customerRoute.post('/reserve-customer', async (req, res, next) => {
  try {
    const customer = await CustomerModel.create(req.body);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

customerRoute.get('/reserve', async (req, res, next) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

customerRoute.get('/edit-reservation/:id', async (req, res, next) => {
  try {
    const customer = await CustomerModel.findById(req.params.id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

customerRoute.put('/update-reservation/:id', async (req, res, next) => {
  try {
    const customer = await CustomerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(customer);
    console.log('Reservation successfully updated!');
  } catch (error) {
    next(error);
  }
});

customerRoute.delete('/delete-reservation/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await CustomerModel.findByIdAndRemove(id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.status(200).json({ msg: customer });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    next(error);
  }
});

module.exports = customerRoute;
