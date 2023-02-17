const Express = require("express");
const Router =  Express.Router()

const ProfileController = require("../Controller/Controller.js");

 // Profile Create Api 
 Router.post("/CreateProfile", ProfileController.CreateProfile)
  
 // User Login Api 
 Router.post("/ReadProfile", ProfileController.ReadProfile)


 // User Login Api 
 Router.post("/DeleteUser/:id", ProfileController.DeleteUser)




 module.exports = Router;