const express = require("express")
const mongoose = require("mongoose")
const User = require("./Models/User")
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const cors = require("cors")
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb+srv://yadhukkurup96:yadatmind123@loopdb.e3kaiot.mongodb.net/LoopDB')
  .then(() => console.log('Connected to mongodb!')).catch(()=>{
    console.log('Error occured while connecting!')
  });

app.get("/",(req,res)=>{
    res.send("Hell0,World")
})

app.post("/register",async (req,res)=>{
   console.log(req.body)
   const saltRounds = 10;
   const salt = bcrypt.genSaltSync(saltRounds);
   const hash = bcrypt.hashSync(req.body.password, salt);
    await User.create({
        fullname:req.body.fullname,
        email:req.body.email,
        password:hash,
        confirmpassword:hash
    }).catch(e => {
        console.log(e)
    })
    res.send("User Registered Successfully.")
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      res.json({ message: "Login successful", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });



app.listen(3000,() => console.log("server is running on port 3000"))