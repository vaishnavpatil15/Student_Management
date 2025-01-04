const db= require("../models/db")


exports.createUser = async (req,res)=>{
    try {
        let {
            f_name,
            l_name,
            user_id,
            dept_id,
            password
        }= req.body
        let createdUserID;
        let query=`insert into login (user_id,password) values (?,?) `
        await db.query(query,[user_id,password],(err,result)=>{
            if(err) throw err;
            createdUserID=result.insertId //get the id of record inserted
        })
        
        let query1=`select * from department where id=${dept_id}`
        await db.query(query1,(err)=>{
            if(err) throw err;
        })
        let insertQuery = `insert into users (f_name, l_name, user_id,dept_id,created_at) values(?,?,?,?,?)`
        await db.query(insertQuery,[f_name,l_name,createdUserID,dept_id,now()],(err,result)=>{
            if(err) throw err;
        })
        res.status(201).json({message:"user created successfully"})

    } catch (err) {
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}