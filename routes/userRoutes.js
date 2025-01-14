const express = require('express');
const { createUser, getAllUsers, getUserUsingUserId } = require('../controllers/userController');
const router = express.Router();
const verifyToken = require('../service/auth')

router.post('/create', createUser);
router.get('/all', verifyToken, getAllUsers);
router.get('/:userId', getUserUsingUserId);

module.exports = router;
