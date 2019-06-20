// When the page loads, we make sure everything is hidden except for the start button:
$(document).ready(function() {
    $("#timer").hide();
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").hide();
    $("#image-holder").html("<img src=assets/images/start3.gif width='400px'>")

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

// Array of images to display if the quesiton was answered correctly
var winImage = ["assets/images/celebration1.gif", "assets/images/celebration2.gif", "assets/images/celebration3.gif", "assets/images/celebration4.gif", "assets/images/celebration5.gif", "assets/images/celebration6.gif", "assets/images/celebration7.gif", "assets/images/celebration8.gif", "assets/images/celebration9.gif", "assets/images/celebration10.gif"];
winImageCount = 0;

// Array of images to display if the question was answered incorrectly (or time ran out)
var loseImage = ["assets/images/loss1.gif", "assets/images/loss2.gif", "assets/images/loss3.gif", "assets/images/loss4.gif", "assets/images/loss5.gif", "assets/images/loss6.gif", "assets/images/loss7.gif", "assets/images/loss8.gif", "assets/images/loss9.gif", "assets/images/loss10.gif"];
loseImageCount = 0;

// This function will display an image if the user wins the round, and the counter for winImage is updated
function displayWinImage() {
    $("#image-holder").html("<img src=" + winImage[winImageCount] + " width='400px'>");
    winImageCount++;
}

// This function will display an image if the user loses the round, and the counter for loseImage is updated
function displayLoseImage() {
    $("#image-holder").html("<img src=" + loseImage[loseImageCount] + " width='400px'>");
    loseImageCount++;
}

// Variables for stats; all stats start at 0
var wins = 0;
var losses = 0;
var unanswered = 0;

// Functions to update stats
function updateWins() {
    $("#wins").text("Correct: " + wins);
}

function updateLosses() {
    $("#losses").text("Incorrect: " + losses);
}

function updateUnanswered() {
    $("#unanswered").text("Unanswered: " + unanswered);
}

// Function to display stats (called at the end of the game)
function showStats() {
    $("#wins").show();
    $("#losses").show();
    $("#unanswered").show();
    updateWins();
    updateLosses();
    updateUnanswered();
}

// Counter variable for cycling through the questions and answers array
var counter = 0;
console.log("Correct answer: " + questionArr[counter].answerCorrect);


// Variables that need outer scope for the timer
var timerId;
var timeLeft;

// Here is the function to start the timer
var startTimer = function() {
    // Here are the variables for the timer
    timeLeft = 5;
    timerId = setInterval(countdown, 1000);
    // Here is the function for the timer
    $("#timer").text("Time remaining: " + timeLeft + " seconds");
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            outOfTime();
            unanswered++;
        } else {
            $("#timer").text("Time remaining: " + timeLeft + " seconds");
            timeLeft--;
        };
    } 
}

// Function to hide the previous question/answers and show the correct answer (if the question was answered incorrectly)
function answerPage() {
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").show();
    $("#yay").text("We can't all be winners.");
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
    $("#image-holder").show();
    displayLoseImage();
    $("#reveal").show();
    $("#reveal").text("The correct answer was " + questionArr[counter].answerCorrect);
}

// Function to hide the previous question/answers and show celebratory elements (if the question was answered correctly)
function congrats() {
    // $("#timer").hide();
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").show();
    $("#yay").text("Looks like we're all winners here!");
    $("#image-holder").show();
    displayWinImage();
}

// Function to hide the previous question/answers and show the correct answer (if the question was not answered in time)
function outOfTime() {
    $("#question").hide();
    $(".hidebutton").hide();
    $("#yay").show();
    $("#yay").text("Out of time!");
    clearTimeout(timerId);
    setTimeout(newQuestion, 3000);
    $("#image-holder").show();
    displayLoseImage();
    $("#reveal").show();
    $("#reveal").text("The correct answer was " + questionArr[counter].answerCorrect);
}

// Function to hide start button and show the timer and first question/answers upon click of the start button
$("#start").click(function(){
    $("#start").hide();
    $("#game-over").hide();
    $("#wins").hide();
    $("#losses").hide();
    $("#unanswered").hide();
    wins = 0;
    losses = 0;
    vunanswered = 0;
    $("#image-holder").hide();
    $("#timer").show();
    startTimer();
    $("#question").show();
    $("#question").text(questionArr[counter].question);
    $(".hidebutton").show();
    $("#answer1").text(questionArr[counter].answersAll[0]);
    $("#answer2").text(questionArr[counter].answersAll[1]);
    $("#answer3").text(questionArr[counter].answersAll[2]);
    $("#answer4").text(questionArr[counter].answersAll[3]);
});

// Function to compare the user's guess to the correct answer
function compareAnswers() {
    $(".answer-choice").on("click", function(event){
        console.log(event);
        console.log("Event: " + event.target.textContent);
        console.log("Event Type: " + typeof(event.target.textContent));
        // If the user guessed correctly, the celebratory function is called and their score is updated
        if (event.target.textContent === questionArr[counter].answerCorrect) {
            console.log("MATCH");
            congrats();
            wins++;
        }
        // If the user guessed incorrectly, the answer page functions is called and their score is updated
        else if (event.target.textContent !== questionArr[counter].answerCorrect) {
            answerPage();
            losses++
        }
    })
}

// Calling the function to compare answers (above)
compareAnswers();
 
// Function to display the next question
function newQuestion() {
    // If the counter variable is less than the questions array (minus 1, to account for the 0th index), a new question is displayed and the timer restarts
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
        $("#reveal").hide();
        startTimer();
        $("#image-holder").hide();
    }
    // Otherwise, the game ends, stats are displayed, and the start button becomes a "start over" button
    else {
        $("#yay").hide();
        $("#reveal").hide();
        $("#timer").hide();
        showStats();
        $("#game-over").show();
        $("#game-over").text("All done! Here's how you did:");
        $("#image-holder").html("<img src=assets/images/end2.gif width='400px'>")
        $("#start").show();
        $("#start").text("START OVER"); // If the start over button is pressed, all stats and counters reset to 0 and the game starts over
        counter = 0;
        winImageCount = 0;
        loseImageCount = 0;
    }};



});