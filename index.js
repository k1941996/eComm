const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AdminRouter = require('./Routes/AdminRouter');
const ProductRouter = require('./Routes/ProductRouter');

mongoose.connect('mongodb://localhost:27017/eCommerce');
const dbConnection = mongoose.connection;

dbConnection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.route('/').get((req, res) => {
	res.send('helllo');
});

app.use('/admin', AdminRouter);
app.use('/product', ProductRouter);

app.listen(PORT, () => {
	console.log(`server listening on http://localhost:${PORT}`);
});
