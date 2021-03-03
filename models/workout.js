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
const workout = new Schema({ 
    day: {
        type: Date,
        default: () => new Date()
    }, 
    exercises: [exercise] 
});
const Workout = mongoose.model('Workout', workout);

module.exports = Workout;

// Creating app... done, ⬢ glacial-beyond-87026
// https://glacial-beyond-87026.herokuapp.com/ | https://git.heroku.com/glacial-beyond-87026.git