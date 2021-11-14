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

//Yes Or No Generic function 
var yesOrNoAnswer = function (promptText) {

  var yesOrNO = window.prompt(promptText);
  yesOrNO = yesOrNO.toUpperCase();

  if (yesOrNO !== null && (yesOrNO === "Y" || yesOrNO === "N")) {

    if (yesOrNO === "Y") {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    window.alert("INVALID! Please enter Y or N to answer")
    return yesOrNoAnswer(promptText);
  }

}

//Special characters, numbers, uppercase, and lowercase
var passwordCharacters = function () {
  var characterConfig = {
    numbers: yesOrNoAnswer("Do you want you password to include numbers? \n\r Enter \"Y\" for yes or \"N\" for no."),
    uppercase: yesOrNoAnswer("Do you want your password to conatin uppercase letters? \n\r Enter \"Y\" for yes or \"N\" for no."),
    lowercase: yesOrNoAnswer("Do you want your password to conatin lowercase letters? \n\r Enter \"Y\" for yes or \"N\" for no."),
    specialCharacters: yesOrNoAnswer("Do you want your password to conatin special characters? \n\r Enter \"Y\" for yes or \"N\" for no."),
  }
  return characterConfig;
};
  
//main generate funtction when press button
var generatePassword = function () {
  var chosenLength = 8;
  var characterConfig = {
    numbers: true,
    uppercase: true,
    lowercase: true,
    specialCharacters: true, 
  }
  var criteriaChoice = window.prompt("Choose you password criteria by typing 1, 2, or 3\n\r 1 - password length requirements \n\r 2 - include special characters, numbers, uppercase, and lowercase   \n\r 3 - both");
  if (criteriaChoice != null && criteriaChoice <= 3 && criteriaChoice > 0) {
    switch (criteriaChoice) {
      case "1": chosenLength = passwordLength();
        break;
      case "2": characterConfig = passwordCharacters();
        break;
      case "3": chosenLength = passwordLength(), characterConfig = passwordCharacters();
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
