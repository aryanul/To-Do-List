const express = require("express");
const bodyParser = require("body-parser");
const app = express ();
const date= require(__dirname+"/date.js")
let items = [];
let workItems= [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.getDate();

    res.render('list', {listTitle:day, newItems:items});
});
app.post("/", function(req,res){
  let item = req.body.newItem;
  if(req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  }else{
  items.push(item);
  // console.log(newItem);
  // res.send("New task added!");
  res.redirect("/");
  }
})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newItems:workItems});
})
// app.post("/work",function(req,res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// })
app.get("/about",function(req,res){
  res.render("about");
})
app. listen(3000, function( ) {
    console. log("Server started on port 3000");
});


