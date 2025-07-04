const express=require("express");
const morgan=require("morgan");
const mongoose=require("mongoose")
const Blog=require("./models/blogs")

const app=express()

const dbURI="mongodb+srv://chechu:chechu123@chechu.km04jpt.mongodb.net/blogdb"
mongoose.connect(dbURI)
.then((result)=>{
    console.log("db connected")
    app.listen(3000)
})
.catch((err)=>{
    console.log(err);
    
})

app.set('view engine','ejs')

app.use(morgan("dev"))

app.use(express.static('public'))


app.get("/add-blog",(req,res)=>{
    const blog=new Blog({
        title:"My Blog",
        snippet:"about my blog",
        body:"more about my new blog"
    })

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
        
    })
})

app.get("/all-blogs",(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);  
    })
})

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