// Assignment Code
var generateBtn = document.querySelector("#generate");


// ARRAYS===================================================================
var specialArr = ["!", "#", "$", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "~", "[", "]", "{", "}", "<", ">", "?"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var passwordArr = [upperArr, lowerArr, numbersArr, specialArr]
var charNames = ['"UPPER CASE" characters', '"lower case" characters', 'numbers', '"Special" Characters (eg.@#$...)']
var arrNames = [upperArr, lowerArr, numbersArr, specialArr]
var charCompare = ""
// var password = ""
// console.log(upperArr.map(name => name.toLowerCase)


// Write password to the #password input

function writePassword() {
//PROMPT TO INPUT PASSWORD LENGTH==============================================================================
  passwordLength = prompt("how long would you like your Password to be?(Must be between 8 and 128 characters")
    if (passwordLength >= 7 && passwordLength <= 128){
      alert("You've chosen a " + passwordLength + " character long password");
    }
//ERROR MESSAGE IF AN INVALID INPUT IS ENTERED=================================================================
    else{
      alert("Invalid Input");
      writePassword()
    }
  var arrcount = 0
//START OF "WHILE LOOP" TO SELECT WHICH ARRAYS WILL BE USED TO GENERATE THE PASSWORD===========================
  while(arrcount === 0){
    
    arrcount = 4;
//MAIN ARRAY OF CHARACTER ARRAYS===============================================================================
    var passwordArr = [upperArr, lowerArr, numbersArr, specialArr]
//"FOR LOOP" TO SELECT WHICH ARRAYS WILL BE USED TO GENERATE THE PASSWORD======================================
    for (var i = 0, len = charNames.length; i < len; i++){
      var charSelection = charNames[i];
      var arrChoice = confirm("Would you like to use " + charSelection + " ?");
      if (arrChoice) {
        alert("You chose to use " + charSelection);
      }
      else {
        var removeFromArr = arrNames[i]
        var remove = passwordArr.indexOf(removeFromArr);
        passwordArr.splice(remove, 1);
        alert("You chose not to use " + charSelection);
        --arrcount;
      }
      if (arrcount === 0){
        alert("You must chose at least 1 set of characters");
      }
    }
  }
  
//SECCTION WHERE "generatePassword" FUNCTION IS CALLED WITH THE APROPRIATE VARIABLES BEING PASSED AND WHERE IT IS WRITEN TO THE DOM== 
  generatePassword(passwordLength, passwordArr)
  var passwordText = document.querySelector("#password");
  passwordText.value = pass;   
   } 

//RANDOM NUMBER FUNCTION USED IN "generatePassword" FUNCTION=======================================================================
function randomNum(x){return Math.floor(Math.random() * x)}

//generatePassword() with placeholders
//"generatePassword" FUNCTION, WHERE THE PASSWORD IS ASSEMBLED AND CREATED
function generatePassword(passwordLength, passwordArr){
  var pswrdArr = []
  for (var i = 0; i < passwordLength;i++ ){
    var selected = randomNum(passwordArr.length)
    var char = passwordArr[selected][randomNum(passwordArr[selected].length)];
    if(char === charCompare){generatePassword(passwordLength, passwordArr)}
    charCompare = char
     pswrdArr.splice(0, 0, char);
     pass = pswrdArr.join("");
  }
 }
//EVENT LISTENER FOR THE BUTTON THAT GENERATES THE PASSWORD IN THE DOM
generateBtn.addEventListener("click", writePassword);