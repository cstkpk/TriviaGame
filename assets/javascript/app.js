// When the page loads:
$(document).ready(function() {
    $("#timer").hide();
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").hide();
    $("#image-holder").html("<img src=assets/images/celebration2.gif width='400px'>")

// Array of questions and answers 
var questionArr = [
    question1 = {
        question: "Who lived in the pit?",
        answersAll: ["Ron Swanson", "Andy Dwyer", "Ann Perkins", "Tom Haverford"],
        answerCorrect: "Andy Dwyer"
    },
    quesiton2 = { 
        question: "In what state is the town of Pawnee located?",
        answersAll: ["Georgia", "Montana", "Indiana", "Pennsylvania"],
        answerCorrect: "Indiana"
    },
    question3 = {
        question: "Which of these was not a former band name of Mouse Rat?",
        answersAll: ["Two Doors Down", "Scarecrow Boat", "Malice in Chains", "Meetwood Flack"],
        answerCorrect: "Meetwood Flack"
    },
    question4 = {
        question: "Fill in the blank: 'Bye bye _______'",
        answersAll: ["Lil' Sebastian", "Birdie", "Apple Pie", "Carrots in the Garden"],
        answerCorrect: "Lil' Sebastian"
    },
    question5 = {
        question: "What surprisingly successful game did Ben Wyatt create?",
        answersAll: ["Liege of Legions", "Calzone Zone", "The Cones of Dunshire", "Claymation Motion"],
        answerCorrect: "The Cones of Dunshire"
    },
    question6 = {
        question: "What is Jerry's real name?",
        answersAll: ["Terry", "Barry", "Garry", "Larry"],
        answerCorrect: "Garry"
    },
    question7 = {
        question: "What internet company became headquartered in Pawnee?",
        answersAll: ["Gryzzl", "Tubes", "Wu Tang LAN", "CromCrast"],
        answerCorrect: "Gryzzl"
    },
    question8 = {
        question: "Who is April's posh alter ego?",
        answersAll: ["Matilda Mumford", "Janet Snakehole", "Katya Semenov", "Edith Botsworth"],
        answerCorrect: "Janet Snakehole"
    },
    question9 = {
        question: "Which of these was not one of Tom Haverford's business ideas?",
        answersAll: ["Disco Dairy——Spread the party", "Saltweens——Saltines for tweens", "Snail Mail——An escargot delivery service", "Socking Stuffers——Socks with pockets"],
        answerCorrect: "Socking Stuffers——Socks with pockets"
    },
    question10 = {
        question: "Which charity built a playground in Pawnee?",
        answersAll: ["Bobs the Builders", "KaBOOM!", "Monkeys in a Barrel", "The Playground People"],
        answerCorrect: "KaBOOM!"
    }
]

// Array for winning images
var winImage = ["assets/images/celebration1.gif", "assets/images/celebration2.gif"];
winImageCount = 0;

// Array for losing images
var loseImage = ["assets/images/loss1.gif"];
loseImageCount = 0;

// This function will display an image if the user wins the round
function displayWinImage() {
    $("#image-holder").html("<img src=" + winImage[winImageCount] + " width='400px'>");
    winImageCount++;
    console.log("Image: " + winImageCount);
}

// This function will display an image if the user loses the round
function displayLoseImage() {
    $("#image-holder").html("<img src=" + loseImage[loseImageCount] + " width='400px'>");
    loseImageCount++;
}

// Variables for stats
var wins = 0;
var losses = 0;
var unanswered = 0;


function updateWins() {
    $("#wins").text("Wins: " + wins);
}

function updateLosses() {
    $("#losses").text("Losses: " + losses);
}

function updateUnanswered() {
    $("#unanswered").text("Unanswered: " + unanswered);
}

function showStats() {
    updateWins();
    updateLosses();
    updateUnanswered();
}


var counter = 0;
console.log("Correct answer: " + questionArr[counter].answerCorrect);



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
            answerPage();
            unanswered++;
        } else {
            elem.innerHTML = "Time remaining: " + timeLeft + " seconds";
            timeLeft--;
        };
    } 
}



// Function to clear the page and show the correct answer
function answerPage() {
    // $("#timer").hide();
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").show();
    $("#yay").text("Tough luck!");
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
    displayLoseImage();
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
    $("#image-holder").show();
    displayWinImage();
}


// Function to hide start button and show the timer and first question with answers
$("#start").click(function(){
    $("#start").hide();
    $("#image-holder").hide();
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
            wins++;
        }
        else if (event.target.textContent !== questionArr[counter].answerCorrect) {
            answerPage();
            losses++
        }
    })
}

compareAnswers();
 

function newQuestion() {

if (counter < questionArr.length - 1) {

    counter++;
    console.log("New question: " + questionArr[counter].question);
    $("#question").show();
    $("#question").text(questionArr[counter].question);
    $(".hidebutton").show();
    $("#answer1").text(questionArr[counter].answersAll[0]);
    $("#answer2").text(questionArr[counter].answersAll[1]);
    $("#answer3").text(questionArr[counter].answersAll[2]);
    $("#answer4").text(questionArr[counter].answersAll[3]);
    $("#yay").hide();
    timeLeft = 10;
    startTimer();
    $("#image-holder").hide();
}
else {
    $("#yay").hide();
    $("#timer").hide();
    showStats();
    $("#game-over").text("GAME OVER");
}};

// Calling functions to start the game



// NOTES/PSEUDOCODE:

// 1. Use a setTimeout for changing from showing the correct answer (if the timer runs down) to showing the next question
// 2. Otherwise, the click of an answer will trigger the post-answer page (and then a setTimeout will trigger the next question)
// 3. Do I need to loop through the questions/answers, or should they just be referenced in if/else statements as questions[0], questions[1], etc.?

});