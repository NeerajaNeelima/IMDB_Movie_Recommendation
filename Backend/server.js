const express=require("express")
const User = require("./react-login-mongodb")
const cors=require("cors")
const app=express()
const company=require("./Routers/router")
require('dotenv').config()
const port =process.env.PORT||5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//const path=require('path');
app.get("/", (req, res) => {
  res.json("Hello")
});
//app.use(express.static(path.join(__dirname,'../Frontend/build')))

app.use("/api", company)
/*app.get('*',function(res,req){
    res.sendFile(path.join(__dirname,'../Frontend/build/index.html'))
})*/
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
  