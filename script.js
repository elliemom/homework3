// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable arrays 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")", "-", "+", ",", ".", "/", "~", "{", "}", "_", "=", "<", ">", "`"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// From selected options randomly generate password.
function generatePassword() {

  var selectLowerCase;
  var selectUpperCase;
  var selectNumber;
  var selectSpecial;
  var passwordResult = [];

  // Confirm how many characters
  var userPasswordLength = prompt("How many characters would you like your password to contain? Please enter a length of your password from 8-128.");

  if ((userPasswordLength < 8) || (userPasswordLength > 128)) {
    alert ("Length must be between 8 - 128 characters!");
  }

  else {

    // Confirm lower case letters 
    selectLowerCase = confirm("Click OK to confirm including lowercase characters.");
    // Confirm upper case letters
    selectUpperCase = confirm("Click OK to confirm including uppercase characters.");
    //Confirm numeric characters 
    selectNumber = confirm("Click OK to confirm including numeric characters.");
    //Confirm special characters
    selectSpecial = confirm("Click OK to confirm including special characters.");

  }
  
  if (selectLowerCase === true) {
    passwordResult = passwordResult.concat(lowerCase)
  }
  if (selectUpperCase === true) {
    passwordResult = passwordResult.concat(upperCase)
  }
  if (selectNumber === true) {
    passwordResult = passwordResult.concat(numbers)
  }
  if (selectSpecial === true) {
    passwordResult = passwordResult.concat(specialCharacter)
  }

  var userPassword = ""

  for (var i = 0; i < userPasswordLength; i++) {
    userPassword = userPassword + passwordResult[Math.floor(Math.random() * passwordResult.length)]

    console.log(userPassword)
  }
  return userPassword;
  
}
