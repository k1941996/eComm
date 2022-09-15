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
	const keyWord = req.body.keyWord;
	const category = req.body.category;

	const product = new Product({
		productName,
		description,
		weighingParameter,
		quantity,
		price,
		discountPrice,
		offer,
		productWeight,
		keyWord,
		category,
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

const addMultipleProducts = (req, res) => {
	const arrData = req.body.arrData;
	Product.insertMany(arrData)
		.then((response) => {
			res.send(`inserted Many records`);
		})
		.catch((err) => {
			res.send(`Something Went Wrong ${err}`);
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

const deleteProduct = (req, res) => {
	const productId = req.params.id;
	Product.deleteOne({ _id: productId })
		.then((e) => {
			if (e?.deletedCount > 0) {
				res.json(e);
			}
			else {
				res.json({response:'Unable to find record with the specified Id'})
			}
		})
		.catch((err) => {
			res.send(`Something Went Wrong ${err}`);
		});
};
/*
const updateProduct = (req, res) => {
	console.log(req, res);
}; */

module.exports = { addProduct, getById, getAllProducts, deleteProduct, addMultipleProducts };
