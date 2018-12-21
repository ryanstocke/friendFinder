var path = require("path");
var friendsTable = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        result.json(friendsTable);
    });

    app.post("/api/friends:friend", function (req, res) {

    });
    


}