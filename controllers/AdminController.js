const Admin = require('./../Models/Admin');

const signUpAdmin = (req, res) => {
	const name = req.body.name;
	const shopName = req.body.shopName;
	const location = req.body.location;
	const contactNo = req.body.contactNo;
	const userName = req.body.userName;
	const email = req.body.email;
	const password = req.body.password;

	const newAdmin = new Admin({
		name,
		shopName,
		location,
		contactNo,
		userName,
		email,
		password,
	});
	newAdmin
		.save()
		.then((response) => {
			console.log(response);
			res.status(200).send('ok');
		})
		.catch((err) => {
			console.log(err);
			res.status(501).send(`Something's wrong`);
		});
};

const login = (req, res) => {
	const userName = req.body.userName;
	const password = req.body.password;

	Admin.find({ userName, password })
		.then((admin) => {
			const id = Array.isArray(admin) && admin.length > 0 && admin[0]._id;

			if (id) {
				res.redirect(`/admin/${id}`);
			} else {
				res.send('Credentials invalid');
			}
		})
		.catch((e) => {
			console.log(e);
		});
};

// for testing
const loggedInUser = (request, response) => {
	response.send('loggedIn User');
};

const getTest = (req, res) => {
	console.log(req.query);
	res.send('ok');
};

module.exports = {
	signUpAdmin,
	login,
	getTest,
	loggedInUser,
};
