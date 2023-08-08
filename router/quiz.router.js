const express = require('express');

const quizzes = require("../db/quizes")
const quizRouter = express.Router();

quizRouter.route("/").
get((res,req)=>{
    res.json(quizzes);
})
module.exports = quizRouter;