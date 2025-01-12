const pool = require("../models/db")
const helper = require('../service/helper')
const _ = require('lodash')

exports.getUserUsingEmail = async (req, res) => {
    try {
        let { email } = req.params
        let getUserUsingUserIdQuery = `SELECT * FROM login where email = '${email}'`
        let data = await helper.getDataUsingRawQuery(getUserUsingUserIdQuery)
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}


exports.createLogin = async (req, res) => {
    try {
        let {user_id, email,user_profile } = req.body
        // let createdUserID;
        // Validate the department using dept id from request
        // await helper.getObjectUsingId("department", dept_id)

        // Insert a records using request data
        let query = `insert into login (user_id,email,user_profile,created_at) values ('${user_id}','${email}','${user_profile}',now())`
        let response = await pool.query(query);

        // // Get id of created user using user_id
        // let records = await helper.getObjectUsingCustomerField("login", "user_id", user_id)
        // if (records && records.length > 0) {
        //     createdUserID = records[0].id
        //     let insertQuery = `insert into users (f_name, l_name, user_id,dept_id,created_at) values('${f_name}','${l_name}',${createdUserID},${dept_id},now())`
        //     await pool.query(insertQuery)
        // } else {
        //     throw new Error('Failed to create user.')
        // }
        return res.status(201).json({ message: "user created successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}
