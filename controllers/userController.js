const pool = require("../models/db")
const helper = require('../service/helper')
const _ = require('lodash')

exports.createUser = async (req, res) => {
    try {
        let { f_name, l_name, user_id, dept_id, password } = req.body
        let createdUserID;
        // Validate the department using dept id from request
        await helper.getObjectUsingId("department", dept_id)

        // Insert a records using request data
        let query = `insert into login (user_id,password,created_at) values ('${user_id}','${password}',now())`
        await pool.query(query);

        // Get id of created user using user_id
        let records = await helper.getObjectUsingCustomerField("login", "user_id", user_id)
        if (records && records.length > 0) {
            createdUserID = records[0].id
            let insertQuery = `insert into users (f_name, l_name, user_id,dept_id,created_at) values('${f_name}','${l_name}',${createdUserID},${dept_id},now())`
            await pool.query(insertQuery)
        } else {
            throw new Error('Failed to create user.')
        }
        return res.status(201).json({ message: "user created successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}

exports.getUserUsingUserId = async (req, res) => {
    try {
        let { userId } = req.params
        let getUserUsingUserIdQuery = `SELECT * FROM login where user_id = '${userId}'`
        let data = await helper.getDataUsingRawQuery(getUserUsingUserIdQuery)
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        let getAllUserQuery = `SELECT usr.*,lgn.user_id as user_id,lgn.password as password, dept.name as dept_name, dept.info as dept_info from users as usr LEFT JOIN login as lgn ON usr.user_id = lgn.id
        LEFT JOIN department as dept ON dept.id = usr.dept_id`
        let data = await helper.getDataUsingRawQuery(getAllUserQuery)
        data = _.map(data, (item) => {
            delete item.created_at
            delete item.updated_at
            delete item.deleted_at
            return item
        })
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}