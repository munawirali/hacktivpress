const express = require('express');
const router = express.Router();
const user = require('../controller/user');

// router.get('/',user.findAll);
router.post('/signin',user.signin);
router.post('/signup',user.signup);

module.exports = router;
