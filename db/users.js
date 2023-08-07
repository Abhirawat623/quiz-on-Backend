const {v4 : uuid}= require("uuid");

const userdata = {

    "users":[
        {
            id:uuid(),
            username:"abhishekrawat",
            password:"abhishek123",
            emailID:"abhi@gmail.com"
        },
        
        {
            id:uuid(),
            username:"ankitrawat",
            password:"ankit123",
            emailID:"ankit@gmail.com"
        }
    ]
}

module.exports = userdata;