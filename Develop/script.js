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
for (var i = 0, len = charNames.length; i < len; i++){
  var charSelection = charNames[i]
  var arrChoice = arrNames[i]
  var arrChoice = confirm("Would you like to use " + charSelection + " ?")
  if (arrChoice) {
    alert("You chose to use " + charSelection)
  }
  else{
    var remove = passwordArr.indexOf(passwordArr[i])
    passwordArr.splice(remove, 1)
    alert("You chose not to use " + charSelection)
    console.log(passwordArr[0][0]) 
  }
}
}



//   var upperCase = confirm('Would you like to use "UPPER CASE" characters in your password? Press OK for YES or CANCEL for NO')
//   if (upperCase){
//     alert('you chose to use "UPPER CASE" characters')
//   }
//     else{
//      var remove = passwordArr.indexOf[upperArr]
//       passwordArr.splice(remove, 1)
//     alert('You chose not to use "UPPER CASE" characters')
//     console.log(passwordArr[0][0])  
//   }

  

//   var lowerCase = confirm('Would you like to use "lower case" characters in your password? Press OK for YES or CANCEL for NO')
//   if (lowerCase){
//     alert('you chose to use "lower case" characters')
//   }  
//   else{
//     var remove = passwordArr.indexOf[lowerArr]
//     passwordArr.splice(remove, 1)
//     alert('You chose not to use "lower case" characters')  
//     console.log(passwordArr[0][0])  
//   }

  

//   var numbers = confirm('Would you like to use "numbers (eg. 1234)" in your password? Press OK for YES or CANCEL for NO')
//   if (numbers){
//     alert('you chose to use "numbers"')
//   }
//   else{
//     var remove = passwordArr.indexOf[numbersArr]
//     passwordArr.splice(remove, 1)
//     alert('You chose not to use "numbers"')
//     console.log(passwordArr[0][0])  
//   }

  

//   var special = confirm('Would you like to use "Special Characters (eg.@!$%)" in your password? Press OK for YES or CANCEL for NO')
//   if (special){
//     alert('you chose to use "Special Characters"')
//   }
//   else{
//     var remove = passwordArr.indexOf[specialArr]
//     passwordArr.splice(remove, 1)
//     alert('You chose not to use "Special Characters"')
//     console.log(passwordArr[0][0])  
  

  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(passwordArr)  