let min = 1;
let max = 100;

const prompt = require("prompt-sync")();
let magicNumber = prompt("Think of a number between 1 and 100, and I will try to guess it!");

while (true) {
  let guess = Math.floor((min + max) / 2);
  let response = prompt('Is your number less than '+guess+ '? (yes or no)');

  if (response.toLowerCase() == "yes") {
    max = guess - 1;
  } else if (response.toLowerCase() == "no") {
    min = guess + 1;
  } else {
    console.log("Invalid input, please try again!");
    continue;
  }

  if (min > max) {
    console.log("Sorry, I couldn't guess your number. It was" +magicNumber);
    break;
  } else if (guess == magicNumber) {
    console.log("I guessed your number! It's "+guess);
    break;
  }
}

