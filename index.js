const express = require("express")
const bodyParser = require ("body-parser")

const  userRoutes = require("./routes/users")


const app = express()
const PORT= 5000

app.use(bodyParser.json())
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.status(200).send("Hello from homepage")
})



app.listen(PORT,()=>{
    console.log(`Server running on port :${PORT}`)
})