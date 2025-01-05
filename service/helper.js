const db = require('../models/db');

exports.getObjectUsingId = async (tableName, id) => {
    try {
        console.log(`Request to get data for table ${tableName} using id: ${id}`);
        const query = `SELECT * FROM "${tableName}" WHERE id = ${id}`;
        let records = await db.query(query);
        if (records && records.rows.length > 0) {
            return records.rows
        } else {
            return []
        }
    } catch (error) {
        throw error
    }
};

exports.getObjectUsingCustomerField = async (tableName, filedName, validateData) => {
    try {
        console.log("Attempting to get data using customer filed's");
        let query = `SELECT * from "${tableName}" WHERE ${filedName} = '${validateData}'`
        let records = await db.query(query);
        if (records && records.rows.length > 0) {
            return records.rows
        } else {
            return []
        }
    } catch (error) {
        throw error
    }
}