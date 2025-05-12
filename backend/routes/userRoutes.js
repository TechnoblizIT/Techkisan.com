const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/UserAuthController');


router.post('/register', registerUser);


module.exports = router;