const  express = require("express");

const app = express();

const PORT = 3000;

const jwt = require("jsonwebtoken");

const jwtKey = "abhi"

const userdata = require("./db/users")

const cors = require('cors');

app.use(cors());

const quizzes = require("./db/quizes");


app.use(express.json()); 
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello there");
})

app.get("/quiz",(req,res)=>{
    res.json(quizzes.data);
})

app.post("/auth/login",(req,res)=>{
    // const user={
    //     id:1,
    //     username: "abhisheksingh",
    //     email:"abhishek@gmail.com"
    // }
    const { username, password } = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if (isUserVerified) {
        // Use the same token generated during sign-up instead of creating a new one
        const token = jwt.sign({ id: username }, jwtKey, { expiresIn: '300s' });
        res.json({
            token,
            username,
            message: "Moj kardi bhai"
        });
    }
    
    else {
        res.status(401).json({ message: "Invalid Credentials" });
    }})





app.listen(PORT,()=>{
    console.log("server is started")
}) 
