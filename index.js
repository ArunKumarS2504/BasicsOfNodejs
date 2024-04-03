//expresss
const express = require('express')
const  app = express();
const port = 3000

//Postgress
const { Pool } = require("pg")
const DB = new Pool({
    host:"127.0.0.1",
    port:5432,
    user:'postgres',
    password:"arunkumar",
    database:"postgres"
})

app.get("/user", async (req,res)=>{
    let users = await DB.query("select * from users")
    res.send(users.rows)
})

app.post("/users", async (req,res)=>{
    let name =req.query.name
    let phone = req.query.phone
    let uid = req.query.uid
    if(name && phone && uid){
        let user = await  DB.query("select * from users where name= $1 and phone=$2 and uid=$3 ",[name,phone,uid])
        if (!(user&&user.rowCount!==0)){
            let data = await DB.query("insert into users (name,phone,uid) values ($1,$2,$3)",[name,phone,uid]);
            res.send({"message": "sucessfully created"})
        }else{
             res.send({"message":"record already exists"})     
        }
    }
    else{
        res.send({"error":"please provide all the details"});  
    }
})
app.get("/", (req,res)=>{
    res.send( {"message": "Hello World!"} )
})

app.listen(port, ()=>{
    console.log(`port running in this server =${port}`)
})