const express = require('express');
const { createUser, getAllUsers, getUserUsingUserId } = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser);
router.get('/all', getAllUsers);
router.get('/:userId', getUserUsingUserId);

module.exports = router;
