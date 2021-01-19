var express = require("express");
var app=express();

app.get("/", function(req,res){
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!");
});

app.get("/dog", function(req,res){
    console.log("Someone make a request to /dog");
    res.send("MEOW!");
});


app.listen(3000,function(){
    console.log("Server listening on port 3000");
});