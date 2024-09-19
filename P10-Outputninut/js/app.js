function doubleNumber (numberToDouble) {
return numberToDouble *4;
}
console.log(doubleNumber(4));

//function name (){
  //console.log("Ben Ting");
  //return name;
//}
  //console.log("Welcome Ben Ting");

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}


console.log(getRandomNumber());

function numbersToLetter(number) {
  if (number === 0) {
    return "A";
  } if (number === 1) {
    return "B";
  } if (number === 2) {
    return "C";
  } if (number === 3) {
    return "Invalid You Idiot, Try Again";
  } else if (number === 4) {
    return "well well";
  }
}

console.log(numbersToLetter(0));
console.log(numbersToLetter(1));
console.log(numbersToLetter(2));
console.log(numbersToLetter(3));
console.log(numbersToLetter(4));






function compareNumbers (number1, number2) {
 if (number1 === number2) {
    return "numbers are equal";
  } else if (number1 < number2) {
      return "number2 is greater than number1";
    } else if (number1 > number2) {
   return "number1 is greater than number2";
 }

}
 console.log(compareNumbers(6,8));






//function compareNumbers(num1, num2) {
  //if (num1 === num2) {
    //return "Both numbers are equal!";
  //} else if (num1 > num2) {
    //return "First number is greater!";
  //} else {
    //return "Second number is greater!";
  //}
//}


//console.log(compareNumbers(1, 2));
//console.log(compareNumbers(3, 3));
//console.log(compareNumbers(5, 1));



