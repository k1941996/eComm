const Product = require('./../Models/Product');

const addProduct = (req, res) => {
	const productName = req.body.productName;
	const description = req.body.description;
	const weighingParameter = req.body.weighingParameter;
	const quantity = req.body.quantity;
	const price = req.body.price;
	const discountPrice = req.body.discountPrice;
	const offer = req.body.offer;
	const productWeight = req.body.productWeight;

	const product = new Product({
		productName,
		description,
		weighingParameter,
		quantity,
		price,
		discountPrice,
		offer,
		productWeight,
	});
	product
		.save()
		.then((response) => {
			console.log(response);
			res.status(200).send('ok');
		})
		.catch((e) => {
			res.status(501).send(`Something's wrong - ${e}`);
		});
};

const getById = (req, res) => {
	const productId = req.params.id;
	Product.findOne({ _id: productId })
		.then((product) => {
			console.log(product);
			res.status(200).json(product);
		})
		.catch((e) => {
			res.send(`Something Went Wrong ${e}`);
		});
};

const getAllProducts = (req, res) => {
	Product.find()
		.then((productList) => {
			res.json(productList);
		})
		.catch((e) => {
			res.send(`Something Went Wrong ${e}`);
		});
};
/* const deleteProduct = (req, res) => {
	console.log(req, res);
};
const updateProduct = (req, res) => {
	console.log(req, res);
}; */

module.exports = { addProduct, getById, getAllProducts }; //, deleteProduct, updateProduct };
