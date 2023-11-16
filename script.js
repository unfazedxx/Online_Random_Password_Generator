// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = (password); //returns the final password



  function generatePassword(){
    chars = ""
    caseCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numberedCharacters = "0123456789"
    specialCharacters = "0!@#$%^&*()"

//Section of code for the user prompts, asking specifying questions to the user about the type of character's needed for their password//

//length
  let passwordLength = window.prompt("Please enter the desired lenth for your password. \n Must be between 8-128 characters.");
   
//special characters with if statement 
  let specCharWind = window.confirm("Would you like to add special characters?")
    if (!specCharWind == true ){
      return;
    } 
    else {window.prompt("Please enter any special Characters you would like:\n !@#$%^&*()");
  }
//uppcase characters with if statement 
      let uppCharWind = window.confirm("Would you like to include uppercase characters?")
      if (!uppCharWind == true){
        return;
      } 
      else {window.prompt("How many capital letters are needed?")}
//at this point the user should have provided enough information for us to generate a passcode.

 // Combine character sets based on user choices
 chars += caseCharacters;
 chars += uppCharWind, caseCharacters.toUpperCase(), "";
 chars += numberedCharacters;
 chars += specCharWind, specialCharacters, "";

 // Generate the password
 
 for (let i = 0; i < passwordLength; i++) {
   let randomIndex = Math.floor(Math.random() * chars.length);
   password += chars.charAt(randomIndex);
 }
 return password; //this should be pushed up to line 11 to call the password.
}

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);