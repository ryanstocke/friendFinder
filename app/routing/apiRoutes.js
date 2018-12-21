var path = require("path");
var friendsTable = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsTable);
    });

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        var bestFriend;
        var bestFriendScore = 1000;

        for (var i = 0; i < friendsTable.length; i++){
            var currentFriend = friendsTable[i];
            var userSum = newUser.scores.reduce(getSum);
            var friendSum = currentFriend.scores.reduce(getSum);
            var friendScore = (Math.abs(userSum-friendSum));
            if (friendScore <= bestFriendScore) {
                bestFriend = currentFriend
                bestFriendScore = friendScore;
            }
        }

        function getSum(total, num) {
            return parseInt(total) + parseInt(num);
          }

        res.json(bestFriend);
    });



}