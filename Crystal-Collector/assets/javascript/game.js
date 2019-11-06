$(document).ready(function() {

    // var topics = ["emerald", "Sapphire", "Ruby", "Opal"];
    // // ADDED THIS FORLOOP AND FUNCTION FROM SOLUTIONS
    // function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    //     $(areaToAddTo).empty();
    
    //     for (var i = 0; i < arrayToUse.length; i++) {
    //         var a = $("<button class='srchBtn'>");
    //         a.addClass(classToAdd);
    //         a.attr("data-type", arrayToUse[i]);
    //         a.text(arrayToUse[i]);
    //         $(areaToAddTo).append(a);
    //       }
      
    //     }
    
    
    // this area creates a for loop that adds buttons for each "topics" value
    // for (var i = 0; i < topics.length; i++) { 
    //     var buttons = $('<button>'+ topics[i] + '</button>') 
    //     buttons.appendTo('#topics'); 
    // } 
    
    // var createRow = function(data) {
    //     // Create a new table row element
    //     var tRow = $("<tr>");
    //     // Methods run on jQuery selectors return the selector they we run on
    //     // This is why we can create and save a reference to a td in the same statement we update its text
    //     var titleTd = $("<td>").text(data);
    //     // Append the newly created table data to the table row
    //     tRow.append(titleTd);
    //     // Append the table row to the table body
    //     $("tbody").append(tRow);
    //   };
      
    var theTotal = 0;
      $('button').click(function(){
         theTotal = Number(theTotal) + Number($(this).val());
          $('.total').text("Total: " + theTotal);        
      });
      
      $('.total').text("Total: " + theTotal); 
      
      
      console.log(theTotal);




// // wraps my content fo javascript
//     // an array of gem values
//     var gemArray = ["3","4","11","13","20"];

//     var gems = ["emerald", "opal", "ruby", "sapphire"];
//     // computer guesses a number
//     var randomNumber; 
//     // number of wins
//     var wins;
//     // number of losses
//     var losses;
//     // keeps track of your current point total
//     var pointCounter = [];
    
//     randomNumber = Math.floor(Math.random() * 94 ) + 40;
    
    
//     // for loop for the crystals
//     for(var i = 0; i < 4; i++){
//         // randomizes the value of each crystal
//         var random = Math.floor(Math.random() * 13) + 1;
//         console.log(random);

//         var crystal = $("<div>");
//             crystal.attr({
//                 "class": 'crystal',
//                 "data-random": random
//             });
    
//         $(".crystals").append(crystal);

//     }

    // $(".crystal").on('click', function () {
    //     console.log($(this).attr('data-random'));
    });

// });