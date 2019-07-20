// wraps my content fo javascript
$(document).ready(function() {
    // an array of gem values
    var gemArray = ["1","2","3","4","5","10","15","20"];
    // computer number
    var randomNumber = [];
    // number of wins
    var wins = [0];
    // number of losses
    var losses = [0];
    // keeps track of your current point total
    var pointCounter = [0];
    

    
    
    // if the computer's generated number = the number of points acrued
    // alert the player "you won" and reset the game. 
        if (randomNumber === pointCounter) {
            alert: "You Won!";
            reset()
        };
// this starts the game.
        reset();
            


});