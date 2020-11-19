var readlineSync = require("readline-sync");

var score = 0;

var username = readlineSync.question("What's your name ?");

console.log("Welcome " + username );
console.log("Do you know Sonu ?");

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong");
  }

  console.log("current score : ", score);
  console.log("--------------------");
}

// array of objects

var questions = [
  {
    question :"where do i live ?",
    answer : "patna"
  },
  {
    question :"where do i work ?",
    answer : "google"
  },
  {
    question :"my superhero would be?",
    answer : "iron man"
  }
];


// loop
for(var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}

console.log("YAY ! You scored ", score);