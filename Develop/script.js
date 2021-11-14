// Password Length
var passwordLength = function () {
  var length = window.prompt("How long do you want you password to be? \n\r (MINIMUM: 8 MAXIMUM: 128)")
  if (length != null && length >= 8 && length <= 128) {
    return length;
  }
  else {
    window.alert("Plese chose a number between 8 and 128!")
    return passwordLength();
  }
};

//Special characters, numbers, uppercase, and lowercase
var passwordCharacters = function () {
  var characterConfig = {
    numbers: true,
    uppercase: true,
    lowercase: true,
    specialCharacters: true,
  }
  var numberYN = window.prompt("Do you want you password to include numbers? \n\r Enter \"Y\" for yes or \"N\" for no.");
  numberYN = numberYN.toUpperCase();
  if (numberYN != null && (numberYN === "Y" || numberYN === "N")) {
    if (numberYN === "Y") {
      characterConfig.numbers = true;
    }
    else {
      characterConfig.numbers = false;
    }
  }
  else {
    
  }
};


//main generate funtction when press button
var generatePassword = function () {
  var chosenLength = 8;
  var criteriaChoice = window.prompt("Choose you password criteria by typing 1, 2, or 3\n\r 1 - password length requirements \n\r 2 - include special characters, numbers, uppercase, and lowercase   \n\r 3 - both");
  if (criteriaChoice != null && criteriaChoice <= 3 && criteriaChoice > 0) {
    switch (criteriaChoice) {
      case "1": chosenLength = passwordLength();
        break;
      case "2": passwordCharacters();
        break;
      case "3": passwordLength(), passwordCharacters();
        break
    }
  }
  else {
    window.alert("INVALID RESPONSE! Please enter 1, 2, or 3")
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
