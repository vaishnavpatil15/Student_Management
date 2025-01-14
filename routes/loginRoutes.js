const express = require('express');
const { getUserUsingEmail, createLogin } = require('../controllers/loginController');
const router = express.Router();

/**
 * @swagger
 * /api/login/create:
 *   post:
 *     summary: Create new login user
 *     description: Create login user status
 *     responses:
 *       200:
 *         description: Login user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                 email:
 *                   type : string
 *                 user_profile:
 *                   type: string
 */
router.post('/create', createLogin);
router.get('/:email', getUserUsingEmail);

module.exports = router;


