const express = require("express")
const { v4: uuidv4 } = require('uuid');

const router = express.Router()

const users =[{
    firstName:"John",
    lastName:"Doe",
    age:25
}]

router.get("/",(req,res)=>{
    console.log(users)
   
    res.json(users)
})

router.post("/",(req,res)=>{
    
    const user=req.body
    const userId= uuidv4()
    const userWithId={...user,id:userId}
    users.push(userWithId)
    console.log(users)

   
    res.send(`User with name ${user.firstName} added to db`)

})
router.get("/:id",(req,res)=>{
  const {id} =(req.params)
  const foundUser=users.find((user)=>user.id ===id)
    res.send(foundUser)
})
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id !== id)
    res.send(`User with the id ${id} deleted from db`)
})



module.exports=router