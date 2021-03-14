// Assignment code here

// variables for password
  
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbols = "!@#$%^&*()_+-=[]\{}|<:;.>?/";


var uppercaseArray = uppercase.split("");
var lowercaseArray = lowercase.split("");
var numberArray = number.split("");
var symbolArray = symbols.split("");

// Main function = Password Generation
function generate(){
    var characters = [];
    var result = "";


// password length prompt

 var Totallength = prompt("How long do you want your password to be? Must be between 8-128 characters");

 if(Totallength <8 || Totallength > 128){
     alert("Select a password that is between 8-128 characters.");
 }

// characters
 
 else{
     if(confirm("Do you want the password to contain uppercase letters?"))
     {
         Array.prototype.push.apply(characters, uppercaseArray);
     }

     if(confirm("Do you want the password to contain lowercase letters?"))
     {
         Array.prototype.push.apply(characters, lowercaseArray);
     }

     if(confirm("Do you want the password to contain numbers?"))
     {
         Array.prototype.push.apply(characters, numberArray);
     }

     if(confirm("Do you want the password to contain any symbols or special characters?"))
     {
         Array.prototype.push.apply(characters, symbolArray);
     }

     if(characters.length=0)
     {
         alert("you must choose at least one selection");
     }


else{
     for(var i=0; i<Totallength; i++)
    {
     var random = Math.floor(Math.random()*characters.length);
    result += characters[random];
    }
    }
}

    document.getElementById("password").innerHTML = result;
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
   
   