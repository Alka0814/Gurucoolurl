const {UserModel} = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const register =  async (req,res) =>{

    try{

          const {name,email,password} = req.body;
     
          const isUserPresent = await UserModel.findOne({email});
         if(isUserPresent) return res.send("User already Present, login please");
         
         const hash = await bcrypt.hash(password,8);

         const newUser = new UserModel ({name,email, password: hash});

         await newUser.save();
         res.send("Signup Successful")

    } catch(err) {      
        res.send(err.message);
    }
}


const login = async (req,res)=> {

    try {
         
        const {email, password} = req.body;

        const isUserPresent  = await User.findOne({email});

        if(!isUserPresent) return res.send("user not present, Register please");

        const isPasswordCorrect = await bcrypt.compare(password,isUserPresent.password);

        if(!isPasswordCorrect) return res.send("Invalid Credentials");

        const token = await jwt.sign({userId:isUserPresent._id},process.env.NormalToken, {expiresIn:"1hr"})

        res.send({message: "Login Success", token});


    } catch(err) {
         res.send(err.message)
    }

}
module.exports = {register,login }