const express = require('express');
const router = express.Router();
const registerValidation = require('../middlewares/registerValidation');
// const bodyParser = require('body-parser');
// Controller
const userControoler = require('../controllers/userController');

// Middleware
const verifyToken = require('../middlewares/verifyToken');



// Routes
router.post('/register',
    registerValidation,
    userControoler.registerProcess);
router.post('/getuser',verifyToken, userControoler.getUser);
router.post('/login', userControoler.loginProcess);

module.exports = router;