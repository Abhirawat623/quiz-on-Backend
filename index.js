const  express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); 




const quizRouter = require("./router/quiz.router");

const {loginRouter,signUpRouter} = require("./router/auth.router")

const routeNotFound = require("./middleware/routenotFound");

const quiz = require("./db/quizes");
app.get("/categories",(req,res)=>{
    res.json(quiz);
})

app.use("/quiz",quizRouter)

app.use("/auth/login",loginRouter)

app.use("/auth/signup",signUpRouter);


app.use(routeNotFound);
app.listen(PORT,()=>{
    console.log("server is started")
}) 
