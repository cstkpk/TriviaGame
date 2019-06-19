// When the page loads:
$(document).ready(function() {
    $("#timer").hide();
    $("#question").hide();
    $(".hidebutton").hide();
    // $("#answer1").hide();
    // $("#answer2").hide();
    // $("#answer3").hide();
    // $("#answer4").hide();
    $("#yay").hide();
    // $(".answer-choice").click(answerPage);

// Array of questions and answers 
var questionArr = [
    question1 = {
        question: "What is the first color in the rainbow?",
        answersAll: ["Orange", "Yellow", "Green", "Red"],
        answerCorrect: "Red"
    },
    quesiton2 = { 
        question: "Which is the largest number?",
        answersAll: ["11", "4", "32", "23"],
        answerCorrect: "32"
    },
    question3 = {
        question: "Which is the best type of pie?",
        answersAll: ["Apple", "Cherry", "Blueberry", "Pecan"],
        answerCorrect: "Blueberry"
    }
]

// Variables for stats
var wins = 0;
var losses = 0;
var unanswered = 0;




var counter = 0;
console.log("Correct answer: " + questionArr[counter].answerCorrect);



// var userGuess = $(".answer-choice").on("click", function(event) {
//     event.target.textContent;
// })

var timerId;
var timeLeft;

// Here is the function to start the timer
var startTimer = function() {
    // Here are the variables for the timer
    timeLeft = 10;
    timerId = setInterval(countdown, 1000);
    var elem = document.getElementById("timer");
    // Here is the function for the timer
    elem.innerHTML = "Time remaining: " + timeLeft + " seconds";
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            // doSomething();
            answerPage();
            unanswered++;
        } else {
            elem.innerHTML = "Time remaining: " + timeLeft + " seconds";
            timeLeft--;
            console.log("Hello time");
        };
    } 
}



// Function to clear the page and show the correct answer
function answerPage() {
    // $("#timer").hide();
    $("#question").hide();
    $(".hidebutton").hide();
    // $("#answer1").hide();
    // $("#answer2").hide();
    // $("#answer3").hide();
    // $("#answer4").hide();
    $("#yay").show();
    $("#yay").text("Tough luck!");
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
}

// Function to clear the page and say congratulations
function congrats() {
    // $("#timer").hide();
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").show();
    $("#yay").text("Congratulations!");
}


// Function to hide start button and show the timer and first question with answers
$("#start").click(function(){
    $("#start").hide();
    $("#timer").show();
    startTimer();
    $("#question").show();
    $("#question").text(questionArr[counter].question);
    $(".hidebutton").show();
    $("#answer1").show();
    $("#answer1").text(questionArr[counter].answersAll[0]);
    $("#answer2").show();
    $("#answer2").text(questionArr[counter].answersAll[1]);
    $("#answer3").show();
    $("#answer3").text(questionArr[counter].answersAll[2]);
    $("#answer4").show();
    $("#answer4").text(questionArr[counter].answersAll[3]);
});



function compareAnswers() {
    $(".answer-choice").on("click", function(event){
        console.log(event);
        console.log("Event: " + event.target.textContent);
        console.log("Event Type: " + typeof(event.target.textContent));
        // Testing to see if we have a correct answer
        if (event.target.textContent == questionArr[counter].answerCorrect) {
            console.log("MATCH");
            congrats();
        }
        else if (event.target.textContent !== questionArr[counter].answerCorrect) {
            answerPage();
        }
    })
}
compareAnswers();
 

// Function to display each question
    // $("#question").text(questionsArr[counter].question);
//     counter++;
// }
function newQuestion() {
    // if (counter <= questionArr.length) {
        counter++;
        console.log("New question: " + questionArr[counter].question);
        $("#question").show();
        $("#question").text(questionArr[counter].question);
        $(".hidebutton").show();
        // $("#answer1").show();
        $("#answer1").text(questionArr[counter].answersAll[0]);
        // $("#answer2").show();
        $("#answer2").text(questionArr[counter].answersAll[1]);
        // $("#answer3").show();
        $("#answer3").text(questionArr[counter].answersAll[2]);
        // $("#answer4").show();
        $("#answer4").text(questionArr[counter].answersAll[3]);
        $("#yay").hide();
        timeLeft = 10;
        startTimer();
    // }
    // else {
    //     $("#yay").hide();
    // }
}




// NOTES/PSEUDOCODE:

// 1. Use a setTimeout for changing from showing the correct answer (if the timer runs down) to showing the next question
// 2. Otherwise, the click of an answer will trigger the post-answer page (and then a setTimeout will trigger the next question)
// 3. Do I need to loop through the questions/answers, or should they just be referenced in if/else statements as questions[0], questions[1], etc.?

});