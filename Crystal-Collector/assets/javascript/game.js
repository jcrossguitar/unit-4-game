$(document).ready(function() {

    var compPick = Math.floor(Math.random() * 1000) + 100; 
    console.log("compPick: " + compPick); 
    $(".randomNumber").html(compPick); 


var gemOne = Math.floor(Math.random() * 300) + 50; 
    console.log("Gem 1: " + gemOne); 
    $("#img1").html("<img src=" + "assets/images/emerald.jpg" + " value=" + gemOne + ">"); 

var gemTwo = Math.floor(Math.random() * 300) + 50; 
    console.log("Gem 2: " + gemTwo); 
    $("#img2").html("<img src=" + "assets/images/opal.jpg" + " value=" + gemTwo + ">"); 

var gemThree = Math.floor(Math.random() * 300) + 50; 
    console.log("Gem 3: " + gemThree); 
    $("#img3").html("<img src=" + "assets/images/ruby.jpg" + " value=" + gemThree + ">");

var gemFour = Math.floor(Math.random() * 300) + 50; 
    console.log("Gem 4: " + gemFour); 
    $("#img4").html("<img src=" + "assets/images/sapphire.jpg" + " value=" + gemFour + ">");
    
var wins = 0; 
    console.log("wins: " + wins); 

var losses = 0; 
    console.log("losses: " + losses); 

var score = 0; 
    console.log("score: " + score); 

function reset () {
    compPick = Math.floor(Math.random() * 102) + 19; 
        console.log("compPick: " + compPick); 
    $(".randomNumber").html(compPick); 

    score = 0; 
    $(".scoreDisplay").html(score); 

    gemOne = Math.floor(Math.random() * 300) + 50;  
        console.log("Emerald: " + gemOne); 
    $("#img1").html("<img src=" + "assets/images/emerald.jpg" + " value=" + gemOne + ">"); 

    gemTwo = Math.floor(Math.random() * 300) + 50; 
        console.log("Opal: " + gemTwo); 
    $("#img2").html("<img src=" + "assets/images/opal.jpg" + " value=" + gemTwo + ">"); 

    gemThree = Math.floor(Math.random() * 300) + 50; 
        console.log("Ruby: " + gemThree); 
    $("#img3").html("<img src=" + "assets/images/ruby.jpg" + " value=" + gemThree + ">");

    gemFour = Math.floor(Math.random() * 300) + 50; 
        console.log("Sapphire: " + gemFour); 
    $("#img4").html("<img src=" + "assets/images/sapphire.jpg" + " value=" + gemFour + ">");

    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value")); 
            console.log("New Score: " + newScore); 
        $(".scoreDisplay").html(newScore); 

        if(newScore === compPick) { 
            wins++ ; 
            $(".wins").html("Wins: " + wins); 
                console.log("Wins: " + wins); 
                reset(); 
        }  
        
        else if(newScore > compPick) {
            losses++ ; 
            $(".losses").html("Losses: " + losses); 
                console.log("Losses: " + losses); 
                reset();  
        }
    }); 
}

$("img").on("click", function () {
    var newScore = score += parseInt($(this).attr("value")); 
        console.log("New Score: " + newScore); 
    $(".scoreDisplay").html(newScore); 

    if(newScore === compPick) { 
        wins++ ; 
        $(".wins").html("Wins: " + wins); 
            console.log("Wins: " + wins); 
            reset(); 
    } 

    else if(newScore > compPick) {
        losses++ ; 
        $(".losses").html("Losses: " + losses); 
            console.log("Losses: " + losses); 
            reset(); 
    }

}); 

});