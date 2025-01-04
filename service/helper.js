const db = require('../models/db');

exports.getObjectUsingId = (tableName, id) => {
    console.log(`Request to get data for table ${tableName} using id: ${id}`);
    console.log("branch changes");
    
    const { id } = req.params;
    const query = `SELECT * FROM ${tableName} WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        return result
    });
};