const router = require('express').Router();
const Product = require('./../controllers/ProductController');

router.get('/all', Product.getAllProducts);
router.post('/add', Product.addProduct);
router.post('/addMultiple',Product.addMultipleProducts);
router.get('/:id', Product.getById);


router.delete('/delete/:id', Product.deleteProduct);
// router.get('/updateProduct', Product.updateProduct);

module.exports = router;
