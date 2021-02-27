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

module.exports = Workout;