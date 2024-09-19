// Document element
// Looks for "text0". Assigns that to the variable called textField0
const textField0 = document.getElementById("text0");

const increaseScoreButton = document.getElementById("button0");
// Internal Variables
let score = Math.floor (Math.random() * 100);
// Process (What is going to happen in what sequence)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne()
});



// Controllers
function increaseScoreByOne() {
  score ++;
  updateScoreText(score);
}

// View
function updateScoreText (newText) {
  textField0.innerHTML = "Your body count is " + newText;
}
function updateStatusText(newText) {
  textField0.innerHTML = newText;
}
