// This is the checkbox version
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Display the default slider value
var slider = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Write password to the #password input
function writePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric= "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var lowercaseInput = document.getElementById("lowercase");
  var uppercaseInput = document.getElementById("uppercase");
  var numericInput = document.getElementById("numeric");
  var specialCharactersInput = document.getElementById("specialCharacters");
  var passwordlength = document.getElementById("myRange").value;
  var newPassword = "";
  var passwordCharacters = ""; 
if(lowercaseInput.checked) {
passwordCharacters += lowercase;
}
if(uppercaseInput.checked) {
  passwordCharacters += uppercase;
  }
if(numericInput.checked) {
  passwordCharacters += numeric;
  } 
if(specialCharactersInput.checked) {
  passwordCharacters += specialCharacters;
  } 
if(!lowercaseInput.checked && 
    !uppercaseInput.checked &&
    !numericInput.checked &&
    !specialCharactersInput.checked
  )
  {alert('Please select at least one criteria.')}

  for (var i = 0; i < passwordlength; i++)
  {newPassword += passwordCharacters.charAt(Math.floor(Math.random()* passwordCharacters.length))
  }
  document.getElementById("password").value=newPassword;
  document.getElementById("myRange").oninput=function(){
    if(document.getElementById("myRange").value>7){
    } else {
      document.getElementById('length').innerHTML="length: 8";
    }
  }
}


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
