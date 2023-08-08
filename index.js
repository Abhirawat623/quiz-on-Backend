const  express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

const jwt = require("jsonwebtoken");


const userdata = require("./db/users")


const quizRouter = require("./router/quiz.router");



app.get("/",(req,res)=>{
    res.json("hello there");
})

app.use("/quiz",quizRouter)

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
            message: "user"
        });
    }
    
    else {
        res.status(401).json({ message: "Invalid Credentials" });
    }})





app.listen(PORT,()=>{
    console.log("server is started")
}) 