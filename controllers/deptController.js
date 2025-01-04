const db = require('../models/db');

// Add Department
exports.addDept = (req, res) => {
    const { name,info } = req.body;
    const query = "INSERT INTO department (name,info) VALUES (?,?)";
    db.query(query, [name.info], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Department added successfully", deptId: result.insertId });
    });
};

exports.getDept = (req, res) => {
    console.log(`Request for get department using dept id` + req.params.id );
    const { id } = req.params;
    const query = "SELECT * FROM department WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ data: result });
    });
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
