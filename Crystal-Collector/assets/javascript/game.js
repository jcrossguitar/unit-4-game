// wraps my content fo javascript
    // an array of gem values
    var gemArray = ["3","4","11","13","20"];
    // computer guesses a number
    var randomNumber; 
    // number of wins
    var wins;
    // number of losses
    var losses;
    // keeps track of your current point total
    var pointCounter = [0];
    
    randomNumber = Math.floor(Math.random() * 94 ) + 40;
    
    
    // for loop for the crystals
    for(var i = 0; i < 4; i++){
        // randomizes the value of each crystal
        var random = Math.floor(Math.random() * 13) + 1;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
    
        $(".crystals").append(crystal);

    }

    $(".crystal").on('click', function () {
        console.log($(this).attr('data-random'));
    });