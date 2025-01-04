const db = require("../models/db")

exports.createUser = (req, res) => {
    try {
        let { f_name, l_name, user_id, dept_id, password } = req.body
        let createdUserID;
        let query = `insert into login (user_id,password,created_at) values (?,?,?) `
        db.query(query, [user_id, password, new Date()], (err, result) => {
            if (err) throw err;
            createdUserID = result.insertId //get the id of record inserted
            let query1 = `select * from department where id = ?`
            db.query(query1,[dept_id], (err) => {
                if (err) throw err;
                let insertQuery = `insert into users (f_name, l_name, user_id,dept_id,created_at) values(?,?,?,?,?)`
                db.query(insertQuery, [f_name, l_name, createdUserID, dept_id, new Date()], (err, result) => {
                    if (err) throw err;
                    return res.status(201).json({ message: "user created successfully" });
                })
            })
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message })
    }
}