
const mongoose=require("mongoose")

require('dotenv').config()
const con_url=process.env.MONGO_URI;

mongoose.connect(con_url,{useNewUrlParser: "true",
useUnifiedTopology: "true"})
.then(() =>console.log("mongodb connected"))
.catch((e) =>console.log(e));


  