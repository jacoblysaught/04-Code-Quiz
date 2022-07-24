const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('#timer')
let time = 75;
const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "HyperText Marking Language", "HyperTouch Make Language", "HypeText Markup Literature"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["other arrays", "strings and numbers", "booleans", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Where do you need to include the link or script tag for a JavaScript file?",
    choices: ["In the head", "Start of body", "End of body", "After all the code"],
    answer: "End of body",
  },
  {
    question: "A common and very helpful tool used during development for printing content to the console",
    choices: ["Terminal / Bash", "console.log", "debugger", "JavaScript" ],
    answer: "console.log",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Booleans", "Strings", "Alerts", "Numbers"],
    answer: "Alerts",
  },

];

startBtn.addEventListener('click', function() {
  //add timer
  setInterval(function(){
    time--
    timer.textContent = time;
  }, 1000)
})