const pool = require('../models/db');
const helpers = require('../service/helper');

// Add Department
exports.addDept = async (req, res) => {
    try {
        const { name, info } = req.body;
        const query = "INSERT INTO department (name,info,created_at) VALUES ($1,$2,$3)";
        pool.query(query, [name, info, new Date()]);
        res.status(201).json({ message: "Department added successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getDept = async (req, res) => {
    console.log(`Request for get department using dept id` + req.params.id);
    const { id } = req.params;
    try {
        let result = await helpers.getObjectUsingId('department', id);
        let data = result && result.rows.length > 0 ? result.rows : []
        res.status(200).json({ data });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getAllDept = async (req, res) => {
    try {
        const query = "SELECT * FROM department";
        console.log("Request to get all depts");
        let response = await pool.query(query);
        let data = response && response.rows.length > 0 ? response.rows : []
        res.status(200).json({ data });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Update Department
exports.updateDept = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const query = "UPDATE department SET name = $1 WHERE id = $2";
        await pool.query(query, [name, id])
        res.status(200).json({ message: "Department updated successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Delete Department
exports.deleteDept = async (req, res) => {
    try {
        const { id } = req.params;
        const query = "DELETE FROM department WHERE id = $1";
        await pool.query(query, [id]);
        return res.status(200).json({ message: "Department deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
