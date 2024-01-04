const startButton = document.querySelector(".Start-button");

startButton.addEventListener("click", function() {
  setTime();
  showQuestions();
})

var timeEl = document.querySelector(".countdown");

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      secondsLeft = 5;
    }
  }, 1000);
}

var questionEl = document.querySelector(".Questions")
var answer1El = document.querySelector(".Answer1")
var answer2El = document.querySelector(".Answer2")
var answer3El = document.querySelector(".Answer3")
var answer4El = document.querySelector(".Answer4")
var correctAnswerEl = document.querySelector(".Correct-answer")

function showQuestions() {
  var questions = [
    {
      question1: "Commonly used data types DO Not Include:",
      ans1: "1. strings",
      ans2: "2. booleans",
      ans3: "3. alerts",
      ans4: "4. numbers",
      correct: "ans3"
    },
    {
      question2: "The condition in an if / else statement is enclosed with _____________.",
      ans1: "1. quotes",
      ans2: "2. curly brackets",
      ans3: "3. parenthesis",
      ans4: "4. square brackets",
      correct: "ans3"
    },
    {
      question3: "Arrays in JavaScript can be used to store _____________.",
      ans1: "1. numbers and strings",
      ans2: "2. other arrays",
      ans3: "3. booleans",
      ans4: "4. all of the above",
      correct: "ans4"
    },
    {
      question4: "String values must be enclosed within ________ when being assigned to variables.",
      ans1: "1. commas",
      ans2: "2. curly brackets",
      ans3: "3. quotes",
      ans4: "4. parenthesis",
      correct: "ans3"
    },
    {
      question5: "A very useful tool used during development and debugging for printing content to the debugger is: ",
      ans1: "1. JavaScript",
      ans2: "2. terminal/bash",
      ans3: "3. for loops",
      ans4: "4. console.log",
      correct: "ans4"
    }
  ]
  questionEl.textContent = questions[0].question1;
  answer1El.textContent = questions[0].ans1;
  answer2El.textContent = questions[0].ans2;
  answer3El.textContent = questions[0].ans3;
  answer4El.textContent = questions[0].ans4;
  correctAnswerEl.textContent = questions[0].correct
}

showQuestions();