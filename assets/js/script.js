function generatePassword () {
  var generateBtn = document.getElementById("generate");
  generateBtn.addEventListener("click", generatePassword)
  
  
  // Prompt user to confirm criteria for password, ge character types
  var upper = window.confirm("Would you like to add upper case characters to your password?");
  var lower = window.confirm("Would you like to add lower case characters to your password?");
  var numbers = window.confirm("Would you like to add numbers to your password?");
  var symbols = window.confirm("Would you like to add symbols to your password?");

  if (upper === false && lower === false && numbers === false && symbols === false) {
    window.alert("Your password is password. Just kidding, try again.")
    return
    }

  // Prompt user to confirm length between 8 and 128 characters
  var passLength = window.prompt("How long of a password would you like, between 8 and 128 characters?")
  if (passLength < 8 || passLength > 128) {
  window.alert("Password criteria is out of range");
  return
  }

  // If the user doesn't input a number value for the length of the password, alert: You have not entered number
  if (isNaN(passLength)) {
    window.alert("You have not entered a number value")
    return
  }

  // Password strings for type of characters for password generator
  var password = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var sym = ":!@#$%^&*()~_+-=";

  // Password aray to join all for loops togeather
  var passWordAray = []

  // foor loops refering to the password strings, runing a randomizer for each for loop
  if (upper) {
    for (var i = 0; i < 8; i++) 
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }

  if (lower) {
    for (var x = 0; x < 8; x++)
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }

  if (numbers) {
    for (var i = 0; i < 8; i++)
    password += num.charAt(Math.floor(Math.random() * num.length));
  }

  if (symbols) {
    for (var i = 0; i < 8; i++)
    password += sym.charAt(Math.floor(Math.random() * sym.length));
  }
  for(var i = 0 ; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    var randomElement = password[randomIndex]
    passWordAray.push(randomElement)
  }

  // This joins all the for loops into one var to then push into one single output
    document.getElementById("password").value = passWordAray.join("");
};

//Start the function
generatePassword();
