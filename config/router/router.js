module.exports = app =>{
   const users = require("../../app/controller/UsersControllers")

   app.get("/users", users.allUsers)
   app.post("/",users.createUser)
}