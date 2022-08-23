const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');

const AdminUserSchema = new Schema(
	{
		name: { required: true, type: String },
		shopName: { required: true, type: String },
		location: { required: true, type: String },
		contactNo: { required: true, type: String },
		userName: { required: true, type: String },
		password: {
			required: true,
			type: String,
		},
		email: {
			required: true,
			unique: true,
			type: String,
			validate: {
				validator: function (v) {
					return validator.isEmail(v);
				},
				message: 'Not a valid Email ',
				reason: 'Email is not a valid email',
			},
		},
	},
	{
		timestamps: true,
	}
);

AdminUserSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		const passwordHash = await bcryptjs.hash(this.password, 10);
		this.password = passwordHash;
	}
	next();
});

const Admin = mongoose.model('Admin', AdminUserSchema);

module.exports = Admin;
