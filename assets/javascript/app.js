// When the page loads:
$(document).ready(function() {
    $("#timer").hide();
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#yay").hide();
    // $(".answer-choice").click(answerPage);

// Array of questions and answers 
var questionArr = [
    question1 = {
        question: "What is the first color in the rainbow?",
        answersWrong: ["Orange", "Yellow", "Green"],
        answerCorrect: "Red"
    },
    quesiton2 = { 
        question: "Which is the largest number?",
        answersWrong: ["11", "4", "23"],
        answerCorrect: "32"
    }
]

var counter = 0;
// var userGuess = $("#answer4:text").click();
var userGuess = $(".answer-choice").val();
console.log("Correct answer: " + questionArr[counter].answerCorrect);


// Here is the function to start the timer
function startTimer() {
    // Here are the variables for the timer
    var timeLeft = 10;
    var elem = document.getElementById("timer");
    var timerId = setInterval(countdown, 1000);
    // Here is the function for the timer
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            // doSomething();
            answerPage();
        } else {
            elem.innerHTML = "Time remaining: " + timeLeft + " seconds";
            timeLeft--;
        };
    }
}

// Function to clear the page and show the correct answer
function answerPage() {
    $("#timer").hide();
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
}

// Function to clear the page and say congratulations
function congrats() {
    $("#timer").hide();
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#yay").show();
    $("#yay").text("Congratulations!")
}


// Function to hide start button and show the timer and first question with answers
$("#start").click(function(){
    $("#start").hide();
    startTimer();
    $("#timer").show();
    $("#question").show();
    $("#question").text(questionArr[counter].question);
    $("#answer1").show();
    $("#answer1").text(questionArr[counter].answersWrong[0]);
    $("#answer2").show();
    $("#answer2").text(questionArr[counter].answersWrong[1]);
    $("#answer3").show();
    $("#answer3").text(questionArr[counter].answersWrong[2]);
    $("#answer4").show();
    $("#answer4").text(questionArr[counter].answerCorrect);
    // counter++;

});

if (userGuess == questionArr[counter].answerCorrect) {
    // setTimeout(congrats, 3000);
    congrats();
}
else if (userGuess !== questionArr[counter].answerCorrect) {
    // setTimeout(answerPage, 3000);
}

 

// Function to display each question
    // $("#question").text(questionsArr[counter].question);
//     counter++;
// }




// NOTES/PSEUDOCODE:

// 1. Use a setTimeout for changing from showing the correct answer (if the timer runs down) to showing the next question
// 2. Otherwise, the click of an answer will trigger the post-answer page (and then a setTimeout will trigger the next question)
// 3. Do I need to loop through the questions/answers, or should they just be referenced in if/else statements as questions[0], questions[1], etc.?

});