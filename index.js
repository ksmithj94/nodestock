let express = require("express");
let app = express();
let path = require("path");
let exphbs = require("express-handlebars");

let PORT = process.env.PORT || 5000;


//set Handlebars Middleware
app.engine("handlebars", exphbs());
app.set('view engine', "handlebars");

//set handlebar routes
app.get('/', function (req, res) {
  res.render('home');
});

// set static folder
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, function() {
  console.log('server listening on port ' + PORT)
});