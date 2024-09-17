//function doubleNumber (numberToDouble) {
  //return numberToDouble *4;
//}
//console.log(doubleNumber(4));

//function name (){
  //console.log("Ben Ting");
  //return name;
//}
  //console.log("Welcome Ben Ting");

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

// Exempel på användning:
console.log(getRandomNumber());

function numberToLetter(num) {
  if (num === 0) {
    return 'A';
  } else if (num === 1) {
    return 'B';
  } else if (num === 2) {
    return 'C';
  } else {
    return 'Invalid input';
  }
}

// Exempel på användning:
console.log(numberToLetter(0)); // Output: A
console.log(numberToLetter(1)); // Output: B
console.log(numberToLetter(2)); // Output: C

function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return "Both numbers are equal!";
  } else if (num1 > num2) {
    return "First number is greater!";
  } else {
    return "Second number is greater!";
  }
}

// Exempel på användning:
console.log(compareNumbers(1, 2)); // Output: Second number is greater!
console.log(compareNumbers(3, 3)); // Output: Both numbers are equal!
console.log(compareNumbers(5, 1)); // Output: First number is greater!



