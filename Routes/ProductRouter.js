const router = require('express').Router();
const Product = require('./../controllers/ProductController');

router.post('/add', Product.addProduct); 

module.exports = router;
