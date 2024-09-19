//Document Elements
//looks for text 0, assigns it to variable calls textField0
const textField0 = document.getElementById('text0');
const textField1 = document.getElementById('text1');

// Internal Variables
let score = 0;

// Process

increaseScoreByOne();

//controllers
function sendScore (inputNumber){
  return inputNumber * 100 //output is a number
}

function showStylizedScore (scoreNumber){
  return "your score is " + scoreNumber * 100;
}

function increaseScoreByOne ( ) {
  score++;
  updateScoreText(score);
}

//view
function updateScoreText (newText) {
  textField0.innerHTML = newText;
}
function updateStatus (newText){
  textField0.innerHTML = newText;
}
