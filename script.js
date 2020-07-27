// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var charactersLengths = prompt("How many characters would you like your password to contain?");
var lowerCase = confirm("Click OK to confirm including lowercase characters.");
var upperCase = confirm("Click OK to confirm including uppercase characters.");
var numeric = confirm("Click OK to confirm including numeric characters.");
var special = confirm("Click OK to confirm including special characters.");

}

let password = '';
console.log(charactersLengths);
console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(special);


if(lowerCase === true && upperCase === true && numeric === true && special === true){
  for(var i = 0; i <charLength; i++){
    charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
    console.log(charPick);
    password = password.toString()+charPick.toString();
    console.log(password);
  }
}  
//if uppercase but no numbers
  else if(num != true && whichCase === true){
    for(var i = 0; i <charLength; i++){
    charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
    console.log(charPick);
    password = password.toString()+charPick.toString();
    console.log(password);
  }
}
// numbers no uppercase
  else if(num === true && whichCase != true){
    for(var i = 0; i <charLength; i++){
      charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);       
    }
  }
  else if(num != true && whichCase != true){
    for(var i = 0; i <charLength; i++){
      charPick = characters[Math.floor(Math.random()*characters.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
} 
  }





