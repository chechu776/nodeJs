const express=require("express");
const morgan=require("morgan");
const app=express()

app.set('view engine','ejs')

app.use(morgan("dev"))

app.use(express.static('public'))
app.listen(3000)

app.get("/",(req,res)=>{
    res.render("index",{title:"Home"})
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
})

app.get("/blogs/create",(req,res)=>{
    res.render("create",{title:"Create"})
})

app.use((req,res)=>{
    res.status(404).render("404",{title:"Error 404"})
})