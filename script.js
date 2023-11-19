// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  console.log("generating a password")
  var passwordLength = parseInt(prompt("How long would you like your password to be?"));
  console.log("passwordLength : " , passwordLength);

  if(Number.isNaN(passwordLength))
  {
    alert("Please enter a valid number");
    return;
  }

  if(passwordLength < 8 || passwordLength > 128){
    console.log("Its invalid");
    return "Invalid password length!"
  }
  var uppercase = ["A","B","C"];
  var lowercase = ["a","b","c"];
  var numbers = ["1","2","3","4"];
  var special = ["!","@","$","%"];
  var possibleChar = []; //holding all possible characters for the password
  var finalChar = []; //at least one char of each type that we said yes for
  var pwd = [];
  
  var confirmUpper = confirm("Need upper case letters in your password?");

  var confirmLower = confirm("Need upper case letters in your password?");

  var confirmNumber = confirm("Need upper case letters in your password?");

  var confirmSpecial = confirm("Need upper case letters in your password?");

  if(confirmUpper){
    possibleChar = possibleChar.concat(uppercase);
    console.log(uppercase);
    finalChar.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
  }

  if(confirmLower){
    possibleChar = possibleChar.concat(lowercase);
    finalChar.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
  }

  //add IF conditions for number and special characters

  for(i=0;i<passwordLength;i++){
    pwd.push(possibleChar[Math.floor(Math.random()*possibleChar.length)]);
    console.log(pwd);
  }

  //Add a FOR Loop to replace first 4 characters of pwd with finalChar array


  var userPassword = pwd.join("");
  return userPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

