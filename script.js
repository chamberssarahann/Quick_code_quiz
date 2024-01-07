const startButton = document.querySelector(".Start-button");

startButton.addEventListener("click", function () {
  startGame();
  showQuestions();
});

var timeEl = document.querySelector(".countdown");

var secondsLeft = 60;

function startGame() {
  gameContainerEl.style.display = "block";
  scoreContainerEl.style.display = "none";
  timeDivEl.style.display = "block";
  scoresPageEl.style.display = "none";
  startAgain.style.display = "none";


  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

var questionEl = document.querySelector(".Questions");
var answer1El = document.querySelector(".Answer1");
var answer2El = document.querySelector(".Answer2");
var answer3El = document.querySelector(".Answer3");
var answer4El = document.querySelector(".Answer4");
var correctAnswer = "";

let currentQuestionIndex = 0;

function progressQuestions() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    endGame();
  }
  // write in a high score enter function where you can put your initials
}

const questions = [
  {
    question: "Commonly used data types DO Not Include:",
    ans1: "1. strings",
    ans2: "2. booleans",
    ans3: "3. alerts",
    ans4: "4. numbers",
    correct: "3. alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed with _____________.",
    ans1: "1. quotes",
    ans2: "2. curly brackets",
    ans3: "3. parenthesis",
    ans4: "4. square brackets",
    correct: "3. parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _____________.",
    ans1: "1. numbers and strings",
    ans2: "2. other arrays",
    ans3: "3. booleans",
    ans4: "4. all of the above",
    correct: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    ans1: "1. commas",
    ans2: "2. curly brackets",
    ans3: "3. quotes",
    ans4: "4. parenthesis",
    correct: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    ans1: "1. JavaScript",
    ans2: "2. terminal/bash",
    ans3: "3. for loops",
    ans4: "4. console.log",
    correct: "4. console.log",
  },
];

function showQuestions() {
  // start writing function to iterate through questions

  questionEl.textContent = questions[currentQuestionIndex].question;
  answer1El.textContent = questions[currentQuestionIndex].ans1;
  answer2El.textContent = questions[currentQuestionIndex].ans2;
  answer3El.textContent = questions[currentQuestionIndex].ans3;
  answer4El.textContent = questions[currentQuestionIndex].ans4;
  correctAnswer = questions[currentQuestionIndex].correct;
}
// Maybe I should create a userSelection variable to save selections rather than creating event listeners on each button with if/else statements. Do I create a general event listener to where click gathers the selection and I compare the selection to the answer? How do I keep other clicks out of it without repeating the code like below
// let userSelection = "";

// if/else statements per question/selection
answer1El.addEventListener("click", function () {
  if (answer1El.textContent === correctAnswer) {
    console.log("correct answer");
  } else {
    console.log("incorrect answer");
    secondsLeft -= 15;
  }
  progressQuestions();
});

answer2El.addEventListener("click", function () {
  if (answer2El.textContent === correctAnswer) {
    console.log("correct answer");
  } else {
    console.log("incorrect answer");
    secondsLeft -= 15;
  }
  progressQuestions();
});

answer3El.addEventListener("click", function () {
  if (answer3El.textContent === correctAnswer) {
    console.log("correct answer");
  } else {
    console.log("incorrect answer");
    secondsLeft -= 15;
  }
  progressQuestions();
});

answer4El.addEventListener("click", function () {
  if (answer4El.textContent === correctAnswer) {
    console.log("correct answer");
  } else {
    console.log("incorrect answer");
    secondsLeft -= 15;
  }
  progressQuestions();
});

showQuestions();

const gameContainerEl = document.getElementById("Game-container");
const scoreContainerEl = document.getElementById("Scores-container");
const timeDivEl = document.getElementById("time-div");
const scoresPageEl = document.getElementById("scores-page");

function endGame() {
  gameContainerEl.style.display = "none";
  scoreContainerEl.style.display = "block";
  timeDivEl.style.display = "none";
  startButton.style.display = "none";
  scoresPageEl.style.display = "none";
  startAgain.style.display = "none";

}

const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const inputEl = document.getElementById("initials");

  const userScore = {
    initials: inputEl.value,
    score: secondsLeft,
  };

  savedScores.push(userScore);

  localStorage.setItem("scores", JSON.stringify(savedScores));

  submitButton.style.display = "none";
  scoreContainerEl.style.display = "none";
  scoresPageEl.style.display = "block";
  startAgain.style.display = "block";



  const scoresDisplayEl = document.getElementById("scores-display");

  // scoresDisplayEl.textContent = (`${userScore.initials} | ${userScore.score}`)

  savedScores.forEach(userScore => {
    scoresDisplayEl.insertAdjacentHTML("beforeend", `<li>${userScore.initials} | ${userScore.score}</li>`)
  });

});

const startAgain = document.getElementById("again");

startAgain.addEventListener("click", function () {
  window.location.reload();
});

questionEl.textContent = questions[currentQuestionIndex].question;

