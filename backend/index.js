const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5001
app.listen(PORT, function(){
    console.log("Server Started... " + PORT) 
}
)
let users = [
    {
        email : "abcd@gmail.com",
        password : "123"
    }
]
 

app.post("/login",(req,res)=>{
    
    console.log("login req received")
   const user = users.find(function(item){
    return item.email == req.body.email &&
           item.password == req.body.password
   })
    if(user){
        console.log("login success")
        
        res.send(true)
    }
    else{
        console.log("create account")
        res.send(false)
    }
        
    })


    app.post("/register",(req,res)=>{
    
    console.log("account creation req received")
    const newUser = {
    email:req.body.email , 
    password:req.body.password , 
    username:req.body.username
   }

   users.push(newUser)
    console.log("acc created")
   res.send(true)
   })
    


