const  express = require("express");

const app = express();

const PORT = 3000;

const jwt = require("jsonwebtoken")

const cors = require('cors');

app.use(cors());

const quizzes = require("./db/quizes");

const secretKey = require('secretkey')


app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello there");
})

app.get("/quiz",(req,res)=>{
    res.json(quizzes.data);
})

app.post("/login",(req,res)=>{
    const user={
        id:1,
        username: "abhisheksingh",
        email:"abhishek@gmail.com"
    }
    jwt.sign({user},secretKey,{expiresIn:"300s"},(err,token)=>{
res.json({token})
    })

    
   

})


app.listen(PORT,()=>{
    console.log("server is started")
}) 