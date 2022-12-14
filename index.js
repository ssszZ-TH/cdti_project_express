const express = require("express");
const web = express();
const mine = require("./models/miner");

web.get("/", (req, res)=>{
    res.send("<h1>the first page</h1>");
    console.log("home page");
})
web.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/public/about.html");
    console.log("about");
})
web.get("/mining", (req, res)=>{
    res.send(mine.hello());
    console.log("worker . . . start ");
})
web.get("*", (req, res)=>{
    res.send("<title>error</title><h1>404</h1>");
    console.log("not found");
})
web.listen(1001, ()=>{
    console.log("localhost:1001");
})