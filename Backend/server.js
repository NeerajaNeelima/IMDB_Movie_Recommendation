const express=require("express")
const User = require("./react-login-mongodb")
const cors=require("cors")
const app=express()
const company=require("./Routers/router")
require('dotenv').config()
const port =process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
app.use("/api", company)

app.listen(port,() => {
    console.log(`Port connected ${port}`);
  })
  