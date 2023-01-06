const express = require("express");

const bodyparser = require('body-parser');
const path = require("path");
const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('public'));


app.get("/",(req,resp)=>
{
    resp.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(3000,()=>
{
    console.log("server running ");
})