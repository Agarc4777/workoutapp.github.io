const path = require('path');

//Routes: HTML's
module.exports = function(app) {
    app.get("/exercise", function (req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    app.get("/stats", function (req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });


    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};