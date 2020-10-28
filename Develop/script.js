// Assignment Code
var generateBtn = document.querySelector("#generate");


// ARRAYS===================================================================
var specialArr = ["!", "#", "$", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "~", "[", "]", "{", "}", "<", ">", "?"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passwordArr = [upperArr, lowerArr, numbersArr, specialArr]
var charNames = ['"UPPER CASE" characters', '"lower case" characters', 'numbers', '"Special" Characters (eg.@#$...)']
var arrNames = ["UpperCase", "lowerCase", "numb", "special"]
// console.log(upperArr.map(name => name.toLowerCase)


// Write password to the #password input
function writePassword() {
  var arrcount = 3;
  var passwordArr = [upperArr, lowerArr, numbersArr, specialArr]
  for (var i = 0, len = charNames.length; i < len; i++){
    var charSelection = charNames[i];
    var arrChoice = arrNames[i];
    
    var arrChoice = confirm("Would you like to use " + charSelection + " ?");

    if (arrChoice) {
      alert("You chose to use " + charSelection);
    }
    else {
      var remove = passwordArr.indexOf(passwordArr[0]);
      passwordArr.splice(remove, 1);
      alert("You chose not to use " + charSelection);
      // console.log(passwordArr[0][0]) ;
      // console.log(arrcount)
      --arrcount;
    }
    if (arrcount === 0){
      alert("You must chose at least 1 set of characters");
    }
  }  

  for (var i = 1; i > 0;){
    var passwordLength = prompt("how long would you like your Password to be?(Must be between 8 and 128 characters")
    if (passwordLength >= 7 && passwordLength <= 128){
      alert("You've chosen a " + passwordLength + " character long password");
      console.log(passwordLength)
      break;
    }
    else{
      alert("Invalid Input");
    }
  }
}


function generatePassword(){
  for (var i = 0, len = passwordLength.length; i > len;i++ ){
  function randomNum(x){return Math.floor(Math.random() * x)}
  var pswrdArr = []

  var pickedArr = randomNum(passwordArr.length)
  var char = passwordArr[pickedArr][randomNum(pickedArr.length)]
  pswrdArr.splice(0, 0, char)
  }
  var password = pswrdArr.join("")
  return password
}  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



// Add eventlistener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword()