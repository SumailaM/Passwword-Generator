// Function to generate a password based on user preferences
function generatePassword() {
  // Define character sets
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // Prompt user for the number of characters
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Invalid number. Must be between 8-128.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number..");
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  // Confirm if user wants lowercase characters
  hasLowercase = confirm("Do you want to have lowercase characters?");
  if (hasLowercase) {
    alert("Your password Will have lowercase characters.");
  } else {
    alert("Your password will NOT include lowercase characters.");
  }

  // Confirm if user wants uppercase characters
  hasUppercase = confirm("Do you want to have uppercase characters in the password?");
  if (hasUppercase) {
    alert("Your password Will have uppercase characters.");
  } else {
    alert("Your password will NOT have uppercase characters.");
  }

  // Confirm if user wants numeric characters
  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password Will have numbers.");
  } else {
    alert("Your password will NOT have numbers.");
  }

  // Confirm if user wants special characters
  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password Will have special characters.");
  } else {
    alert("Your password will NOT have special characters.");
  }

  // Check if at least one character type is selected
  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // Concatenate selected character types into possible characters array
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Generate final password using selected character types
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to write generated password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
