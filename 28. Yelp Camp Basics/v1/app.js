var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var request=require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
    {name:"Salmon Creek", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"Granite Hill", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"Jasper Hill", image: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"Skyview Hill", image: "https://images.unsplash.com/photo-1504632348771-974e356b80af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"Glenn Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGNhbXBpbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name:"Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000,function(){
    console.log("Server is running!");
});