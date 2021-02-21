const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exercise = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    },
);
const workout = new Schema({ day: Date, exercises: [exercise] });
const Workout = mongoose.model('Workout', workout);




// reference
// {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },

module.exports = Workout;