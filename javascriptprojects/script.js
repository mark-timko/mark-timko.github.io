// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var length = prompt("Please enter the number of characters you would like your password to be:")
    if (length < 8 || length > 128){
      return "You must have between 8 and 128 characters for your password."
    }
    var characters = ''
    if (confirm("Click OK if you would like uppercase letters in the password.")) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (confirm("Click OK if you would like lowercase letters in the password.")) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (confirm("Click OK if you would like numbers in the password.")) {
      characters += '0123456789';
    }
    if (confirm("Click OK if you would like special characters in the password.")) {
      characters += '!#$%&*()';
    }
    var charactersLength = characters.length;
    if (charactersLength == 0) {
      return "You need to select some type of characters!"
    } else {
    var password = '';
    for ( var i = 0; i < length; i++ ) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password
    }
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
