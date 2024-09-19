console.log('Hello World!')
//looks for text 0, assigns it to variable calls textField0
const textField0 = document.getElementById('text0');
textField0.innerHTML = showStylizedScore(5);

function sendScore (inputNumber){
  return inputNumber * 100 //output is a number
}

function showStylizedScore (scoreNumber){
  return "your score is " + scoreNumber * 100;
}


