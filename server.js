// dependencies
var express = require("express");
var mongoose = require("mongoose")



var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  }
).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
