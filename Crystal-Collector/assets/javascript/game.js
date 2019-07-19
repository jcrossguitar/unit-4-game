// wraps my content fo javascript
$(document).ready(function() {
    
    var randomNumber = [];
    var wins = [];
    var losses = [];
    var pointCounter = [];

    
    
    // if the computer's generated number = the number of points acrued
    // alert the player "you won" and reset the game. 
        if (randomNumber === pointCounter) {
            alert: "You Won!";
            reset()
        };
// this starts the game.
        reset();
            


});