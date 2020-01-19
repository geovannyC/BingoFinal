const express = require('express');
const app = express();
const productsRoutes = require('./api/products');
app.use('/home', productsRoutes);
module.exports = app;