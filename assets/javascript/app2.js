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
var questionArr = {
    questions: [
        (question1 = {
            question: "What is the first color in the rainbow?",
            answersWrong: ["Orange", "Yellow", "Green"],
            answerCorrect: "Red"
        }),
        (quesiton2 = { 
            question: "Which is the largest number?",
            answersWrong: ["11", "4", "23"],
            answerCorrect: "32"
        })
    ]
};

var counter = 0;
var userGuess = $("#answer4:text").click();
console.log("User guess: " + userGuess);
// var userGuess = $(".answer-choice").click([3].textContent);
console.log("Correct answer: " + questionArr.questions[counter].answerCorrect);
// console.log("User guess: " + $(".answer-choice").click([3].textContent));
// console.log("User guess: " + $(".answer-choice").innerHTML);
// console.log("User guess: " + JSON.stringify($(".answer-choice").click([3].textContent), null, 2));

$(".answer-choice").on("click", function(event){
    console.log(event);
    console.log(event.target.textContent);
});

// var userGuess = $(".answer-choice").on("click", function(event) {
//     event.target.textContent;
// })


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
    $("#yay").show();
    $("#yay").text("Tough luck!");
    setTimeout(newQuestion, 3000);
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
    $("#yay").text("Congratulations!");
}


// Function to hide start button and show the timer and first question with answers
$("#start").click(function(){
    $("#start").hide();
    startTimer();
    $("#timer").show();
    $("#question").show();
    $("#question").text(questionArr.questions[counter].question);
    $("#answer1").show();
    $("#answer1").text(questionArr.questions[counter].answersWrong[0]);
    $("#answer2").show();
    $("#answer2").text(questionArr.questions[counter].answersWrong[1]);
    $("#answer3").show();
    $("#answer3").text(questionArr.questions[counter].answersWrong[2]);
    $("#answer4").show();
    $("#answer4").text(questionArr.questions[counter].answerCorrect);
    // counter++;

});

if (event.target.textContent === questionArr.questions[counter].answerCorrect) {
    setInterval(congrats, 3000);
    congrats();
}
else if (userGuess !== questionArr[counter].answerCorrect) {
    // setTimeout(answerPage, 3000);
}

 

// Function to display each question
    // $("#question").text(questionsArr[counter].question);
//     counter++;
// }
function newQuestion() {
    counter++;
    $("#question").text(questionsArr.questions[counter].question);
}




// NOTES/PSEUDOCODE:

// 1. Use a setTimeout for changing from showing the correct answer (if the timer runs down) to showing the next question
// 2. Otherwise, the click of an answer will trigger the post-answer page (and then a setTimeout will trigger the next question)
// 3. Do I need to loop through the questions/answers, or should they just be referenced in if/else statements as questions[0], questions[1], etc.?

});