const express=require("express")
const path=require("path")
require("dotenv").config()
const staticRouter=require("../routes/static.routes")
const authRouter=require("../routes/auth.routes")
const cookieParser=require("cookie-parser")
const app=express()

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use("/",staticRouter)
app.use("/auth",authRouter)


module.exports=app