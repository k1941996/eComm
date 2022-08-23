const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		productName: { requrired: true, type: String },
		description: { type: String },
		weighingParameter: { type: String },
		quantity: { type: Number },
		price: { type: String },
		discountPrice: { type: String },
		offer: { type: String },
		productWeight: { type: String },
	},
	{
		timestamps: true,
	}
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
