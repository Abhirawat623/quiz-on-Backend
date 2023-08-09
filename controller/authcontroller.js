const express = require("express");

const {v4: uuid}= require('uuid');

const jwt = require("jsonwebtoken");

const jwtKey = "abhis"

const userdata = require("../db/users");

const signUpHandler = (req,res)=>{

const  {username, password}= req.body;

//already reistered
const isUserReistered = userdata.users.some(user=>
    user.username === username && user.password === password);

    if(isUserReistered){
        res.status(422).json({message:"User Already Exists"})
    }
  else{
    const id = uuid();
    const newUser =  { id,username,password};
    userdata.users=[...userdata.users,newUser];
    const token = jwt.sign({id:username},jwtKey);
    res.json({message: `New User Created Successfully --> ${username}::${token}`})
  }
}

const loginHandler =(req,res)=>{

    const { username, password } = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if (isUserVerified) {
        // Use the same token generated during sign-up instead of creating a new one
        const token = jwt.sign({ id: username }, jwtKey, { expiresIn: '300s' });
        res.json({
            token,
            username,
            message: "user verified"
        });
    }
    
    else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
}



module.exports = {loginHandler, signUpHandler};