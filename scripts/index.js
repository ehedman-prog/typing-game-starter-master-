// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function getRandomWord(){
   const number = Math.floor(Math.random()*words.length);
   return words[number];
}

function addWordToDOM () {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

function updateScore() {
score = score + 1
scoreEl.innerHTML = score;
}

text.addEventListener("input", function (e){
   const typed = e.target.value;
   if (typed === randomWord) {
      updateScore()
      addWordToDOM()
      time = time + 5
      e.target.value = "";
   }
});

function updateTime() {
   time = time - 1
   timeEl.innerHTML = time;
   if (time === 0){
      gameOver();
   }
}

const timeInterval = setInterval(updateTime, 1000);
function gameOver(){
   clearInterval(timeInterval);
   endgameEl.innerHTML = 
   `<h1>TIME'S UP!</h1>
   <p>Your final score is ${score}</p>
   <button onclick="location.reload()">Try Again</button>`;
   endgameEl.style.display = "flex";
}
