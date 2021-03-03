
// Requiring our models
const db = require("../models");
const express = require("express");
// Routes
module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
    .then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });


  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne(
      {_id: req.params.id },
      {text: req.body.text },
      {complete: req.body.complete},
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

};
