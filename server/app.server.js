const express=require("express")
const path=require("path")
require("dotenv").config()
const staticRouter=require("../routes/static.routes")
const app=express()

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.static("public"))
app.use("/",staticRouter)

module.exports=app