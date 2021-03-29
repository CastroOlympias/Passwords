// Assignment Code
//*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//*function writePassword() {
  //*var password = generatePassword();
  //*var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



// Super Strong password generator



var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", superStrongPassword)


//var numericCharacters = ['0', '1', '2', '3', '4','5','6','7','8','9'];
//var hasNumericCharacters = confirm(
    'click OK to confirm including numeric characters.'



function superStrongPassword() {

  //window.prompt('Chose the strength of your password. Strong (1), Medium (2) or weak (3)')
  var strong = ""; 
  var strongNumber = "<>?!@#$%^&*()0123456789abcdefghijklmnopqrstrvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>?!@#$%^&*()";
  
  for (var x = 0; x < 16; x++) 
    strong += strongNumber.charAt(Math.random() * strongNumber.length);
    document.getElementById("password").value = strong;
  return strong;
};

console.log(superStrongPassword());
console.log(mediumPassword());
console.log(weakPassword());

// Medium password generator

function mediumPassword() {

  var medium = "";
  var mediumNumber = "0123456789abcdefghijklmnopqrstrvwxyz";
  
  for (var i = 0; i < 8; i++)
    medium += mediumNumber.charAt(Math.random() * mediumNumber.length);
    document.getElementById("password").value = medium;
  return medium;
};

// Weak password generator

function weakPassword() {

  var weak = "";
  var weakNumber = "0123456789";
  
  for (var i = 0; i < 8; i++)
    weak += weakNumber.charAt(Math.random() * weakNumber.length);
    document.getElementById("password").value = weak;
  return weak;
};
