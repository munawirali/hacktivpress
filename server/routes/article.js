const express = require('express');
const router = express.Router();
const article = require('../controller/article');

// router.get('/',user.findAll);
router.get('/',article.findAll);
router.get('/user/:id',article.findByUser);
router.get('/:id',article.findById);
router.post('/',article.create);
router.put('/:id',article.update);
router.delete('/:id',article.delete);

module.exports = router;
