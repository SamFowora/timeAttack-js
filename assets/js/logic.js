// use render for showing highscores
// question would be array of objects [question title, answers, correct/incorrect]
// separate rendering and checking correct answers
// progress stored in localStorage?
// eventListener  ("click", start game) for start button and setInterval for timer
// timercount = 60 for start time
// need to disable (.disabled) start button after it has began (boolean)
// keyDown event? [define]
// init () function activates the other page functions - would come after pressing start quiz
// [predefined question array]
// [math.floor(mathrandom() * something.length)]

// Quiz
    // Initialise quiz
        // link goes to Q1 and timer begins
        // create object containing:
            // question
            // answer options
        // create another object that:
            // checks whether right or wrong
            // renders " right :) " or " wrong :( " beneath options
        // countdown:
            // if answer is correct, keep timer going with regular 1s decrements
            // if answer is incorrect, decrement by an additional 10s 
            // if all questions are answered  before time is finished, clear timer
            // if all timer runs out before all questions are finished, clear timer

// Constants + DOM
const timer = document.getElementById('timer');
const questions = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
const startQuiz = document.getElementById('start');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final score');
const initialsNow = document.getElementById('initials');
const submitQuiz = document.getElementById('sumbit');
const highscores = document.getElementById('highscores');
const feedback = document.getElementById('feedback');
const startScreenEl = document.getElementById("start-screen");
// Variables
var secondsLeft = 60;
var randomInt = 0;
var score = 0;

// 


// begin function to start quiz
startQuiz.addEventListener("click", begin);
// hide start screen
startScreenEl.setAttribute("class", "hide");
// // un-hide questions section
questionsEl.removeAttribute("class");
// // start timer
timerId = setInterval(clockTick, 1000);
// // show starting time 
timerEl.textContent = time;

// Working out the timer:
const countdown = setInterval(function(){
    console.log(secondsLeft);
    secondsLeft--
    if (secondsLeft === 0 || questions === 0) {
        console.log("All Done! Let's check your results");
        clearInterval(countdown);
    }
}, 1000);

