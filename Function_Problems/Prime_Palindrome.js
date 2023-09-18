const prompt = require("prompt-sync")();

var numberOne = prompt(" Enter Number :: ");

if(isPrime(numberOne)){
    console.log(" -------------- Number is Prime -------------- ")
    var palindromeNumber = palindrome(numberOne);
    console.log(" Palindrome Number :: " + palindromeNumber);
    if(isPrime(palindromeNumber)) console.log(" ----- Palindrome Number " + palindromeNumber + " is Prime. -----");
    else console.log(" ----- Palindrome Number " + palindromeNumber + " is Not A Prime. ----- ");

}else console.log(" ----- Number is Not Prime :: ----- ")


function palindrome(number){
    var res = 0;
    while(number != 0 ){
        res = res*10 + number%10;
        number = Math.floor(number/10);
    }
    return res;
}


function isPrime(number){
    var count = 0;
    for(var i = 2; i <= number ; i++) 
  if(number%i == 0)    
   count++;
    if (count == 1)    
     return true;
}
