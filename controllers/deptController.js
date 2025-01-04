const db = require('../models/db');
const helpers = require('../service/helper');

// Add Department
exports.addDept = (req, res) => {
    const { name, info } = req.body;
    const query = "INSERT INTO department (name,info,created_at) VALUES (?,?,?)";
    db.query(query, [name, info, new Date()], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Department added successfully", deptId: result.insertId });
    });
};

exports.getDept = async (req, res) => {
    console.log(`Request for get department using dept id` + req.params.id);
    const { id } = req.params;
    try {
        let result = await helpers.getObjectUsingId('department', id);
        return res.status(200).json({ data: result });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getAllDept = (req, res) => {
    const query = "SELECT * FROM department";
    console.log("Request to get all depts");

    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ data: result });
    });
};

// Update Department
exports.updateDept = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const query = "UPDATE department SET name = ? WHERE id = ?";
    db.query(query, [name, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Department updated successfully" });
    });
};

// Delete Department
exports.deleteDept = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM department WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Department deleted successfully" });
    });
};
