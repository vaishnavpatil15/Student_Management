const express = require('express');
const { addDept, updateDept, deleteDept, getDept, getAllDept } = require('../controllers/deptController');
const router = express.Router();

router.post('/create', addDept);
router.get('/:id', getDept);
router.put('/update/:id', updateDept);
router.delete('/delete/:id', deleteDept);
router.get('/', getAllDept)

module.exports = router;
