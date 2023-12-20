const express = require("express");

const userrouter= express.Router();

const { login, register  } =require ("../Controllers/userController");

userrouter.use(express.json());



userrouter.post('/register',register)
userrouter.post('/login',login)




module.exports = {userrouter}
