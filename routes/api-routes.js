// Dependencies

// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", function(req, res) {
    db.Workout.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });


  app.put("/api/workouts", function(req, res) {
    db.Workout.updateOne({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

};
