const router = require('express').Router();
const Admin = require('./../controllers/AdminController');

router.post('/signUp', Admin.signUpAdmin);
router.post('/login', Admin.login);
router.post('/:id', Admin.loggedInUser);
router.get('/getTest', Admin.getTest);

module.exports = router;
