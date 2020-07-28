// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variables
var selectLowerCase;
var selectUpperCase;
var selectNumber;
var selectSpecial;

// Set variables  
var plength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// Uppercase conversion
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
var userPassword = "";
var passwordGroup = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Request length of the password
var plength = parseInt(prompt("How many characters would you like your password to contain? Please enter a length of your password from 8-128.",""));

// Require number
while (isNaN(plength)) {
var plength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128.",""));
} 

// Require length    
while (plength < 8 || plength > 128) {
  var plength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));
  } 

// Confirm lower case letters 
var selectLowerCase = confirm("Click OK to confirm including lowercase characters.");
// Confirm upper case letters
var selectUpperCase = confirm("Click OK to confirm including uppercase characters.");
//Confirm numeric characters 
var selectNumber = confirm("Click OK to confirm including numeric characters.");
//Confirm special characters
var selectSpecial = confirm("Click OK to confirm including special characters.");

// Call function to generate password 
generatePassword();

// Write generated password on page
document.getElementById("password").innerHTML = userPassword; 

// From selected options randomly generate password.
function generatePassword() {
  
  if (selectLowerCase) {
  passwordGroup += lowerCase;
  }
  if (selectUpperCase) {
  passwordGroup += upperCase;
  }
  if (selectNumber) {
  passwordGroup += numbers;
  }
  if (selectSpecial) {
  passwordGroup += specialCharacter;
  }
  for (let i = 0; i < plength; i++) {
    userPassword += passwordGroup.charAt(
    Math.floor(Math.random() * passwordGroup.length)
    );
  }
  return userPassword;
}
