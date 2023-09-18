const prompt = require("prompt-sync")();

let numberOne = prompt(" Enter 1st Number :: ");
var numberTwo = prompt(" Enter 2nd Number :: ");;

palindrome(numberOne,numberTwo);


function palindrome(numberOne,numberTwo){
    var res = 0;
    while(numberOne != 0 ){
        res = res*10 + numberOne%10;
        numberOne = Math.floor(numberOne/10);
    }
    if(res == numberTwo) console.log(" :: Palindrome :: ");
    else console.log(" :: Not A Palindrome :: ");
}