const express = require("express");
const bodyParser = require("body-parser");
const app = express ();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    var today = new Date();
    var options= {
      weekday:"long",
      day:"numeric",
      month:"long",
    }
    var day = today.toLocaleDateString("en-IN",options);

    res.render('list', {kindOfDay:day, newItems:items});
});
app.post("/", function(req,res){
  var item = req.body.newItem;
  items.push(item);
  // console.log(newItem);
  // res.send("New task added!");
  res.redirect("/");
})
app. listen(3000, function( ) {
    console. log("Server started on port 3000");
});


