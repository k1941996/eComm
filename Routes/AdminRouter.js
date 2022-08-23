const router = require('express').Router();
const Admin = require('./../controllers/AdminController');

router.post('/:id', Admin.loggedInUser);
router.post('/signUp', Admin.signUpAdmin);
router.post('/login', Admin.login);
router.get('/getTest', Admin.getTest);

module.exports = router;
