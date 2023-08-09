const express = require("express");

const {loginHandler,signUpHandler} = require("../controller/authcontroller");




const loginRouter = express.Router();

const signUpRouter = express.Router();

loginRouter.route("/").
post(loginHandler);

signUpRouter.route("/").
post(signUpHandler);


module.exports =  {loginRouter,signUpRouter};

