$(document).ready(function() {
    $("#timer").hide();
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();

// Array of questions and answers
var questions = {
    "What is the first color in the rainbow?": ["Red", "Orange", "Yellow", "Green"]
};



// Here are the variables to set up the timer
var timeLeft = 30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
// Here is the function for the timer
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = "Time remaining: " + timeLeft + " seconds";
        timeLeft--;
    }
}
// Here is the function for what will happen when the timer runs out
// function showCorrectAnswer();
// This is where I can have it show the answer if time runs out


// Function to hide start button
$("#start").click(function(){
    $("#start").hide();
    $("#timer").show();
})




})