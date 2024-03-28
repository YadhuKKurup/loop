const mongoose = require("mongoose")

const user = new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    confirmPassword:String

   
})

const User = mongoose.model("User", user)
module.exports = User;