// Assignment Code
//*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//*function writePassword() {
  //*var password = generatePassword();
  //*var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);





function test () {
  var generateBtn = document.getElementById("generate");
  generateBtn.addEventListener("click", test)
  
  

  var upper = window.confirm("Would you like to add upper case characters to your password?");
  var lower = window.confirm("Would you like to add lower case characters to your password?");
  var numbers = window.confirm("Would you like to add numbers to your password?");
  var symbols = window.confirm("Would you like to add symbols to your password?");

  if (upper === false && lower === false && numbers === false && symbols === false) {
    window.alert("Your password is password")
    return
    }

  var passLength = window.prompt("How long of a password would you like, between 8 and 182 characters?")
  if (passLength < 8 || passLength > 128) {
  window.alert("Password criteria is out of range");
  return
  }

  if (isNaN(passLength)) {
    window.alert("You have not entered a number value")
    return
  }

  var password = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var sym = ":!@#$%^&*()~_+-=";

  var passWordAray = []

  if (upper) {
    

    for (var i = 0; i < 8; i++) 
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    //document.getElementById("password").value = password;
  }

  if (lower) {
    for (var x = 0; x < 8; x++)
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    //document.getElementById("password").value = password;
  }

  if (numbers) {
    for (var i = 0; i < 8; i++)
    password += num.charAt(Math.floor(Math.random() * num.length));
    //document.getElementById("password").value = password;
  }

  if (symbols) {
    for (var i = 0; i < 8; i++)
    password += sym.charAt(Math.floor(Math.random() * sym.length));
    //document.getElementById("password").value = password;
  }
  for(var i = 0 ; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    var randomElement = password[randomIndex]
    passWordAray.push(randomElement)
  }
    document.getElementById("password").value = passWordAray.join("");
};


test();
//console.log(test);
