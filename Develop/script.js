// Assignment Code
var generateBtn = document.querySelector("#generate");


// ARRAYS===================================================================
var specialArr = ["!", "#", "$", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "~", "[", "]", "{", "}", "<", ">", "?"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var newarr = upperArr.toLowerCase()
console.log(upperArr.map(name function(name.toLowerCase)))


// Write password to the #password input
function writePassword() {
  var upperCase = confirm('Would you like to use "UPPER CASE" characters in your password? Press OK for YES or CANCEL for NO')
  if (upperCase){
    alert("you chose to use UPPER CASE characters")
  }
  var lowerCase = confirm('Would you like to use "lower case" characters in your password? Press OK for YES or CANCEL for NO')
  var numbers = confirm('Would you like to use "numbers (eg. 1234)" in your password? Press OK for YES or CANCEL for NO')
  var special = confirm('Would you like to use "Special Characters (eg.@!$%)" in your password? Press OK for YES or CANCEL for NO')
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
