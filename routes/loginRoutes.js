const express = require('express');
const { getUserUsingEmail, createLogin } = require('../controllers/loginController');
const router = express.Router();

router.post('/create', createLogin);
router.get('/:email', getUserUsingEmail);

module.exports = router;


