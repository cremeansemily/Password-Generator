// Assignment code here

// variable for password

var pw = "";

var lowercaseselection = false;
var uppercaseselection = false;
var specialcharselection = false;
var numberselection = false;

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialchar = "!@#$%^&*()-_=+[{}]\|;:',<>./?";
var number = "1234567890";

// password generator

function generate(){
    var confirmlength = "";}
    while (isNaN(confirmlength)| confirmlength < 8 |confirmlength > 128)
    {
        confirmlength = prompt("What length do you want the password to be? (Between 8 - 128 characters)");
        if (confirmlength === null) 
        {
            break;
        }
    }

// user seclection variables

if(confirmlength) {
    if(confirm("Do you want to use lowercase characters?") == true) 
    { 
        lowercaseselection = true
    }
    if(confirm("Do you want to use uppercase characters?") == true)
    {
        uppercaseselection = true
    }
    if(confirm("Do you want to use special characters?") == true)
    {
        specialcharselection = true
    }
    if(confirm("Do you want to use numerical characters?") == true)
    {
        numberselection = true
    }
    if (lowercaseselection === false && uppercaseselection === false && specialcharselection === flase && numberselection ===false)
    {
        alert("One character selction must be chosen")
    }
}

// generation

var characters = "";
characters += (lowercaseselection ? lowercase: "");
characters += (uppercaseselection ? uppercase: "");
characters += (specialcharselection ? specialchar: "");
characters += (numberselection ? number: "");

pw = Password(confirmlength, characters);

document.getElementById("Password").innerHTML = pw;

function password(characters)
{
    var pw = "";
    for (var i=0; 1/i > 0; i++)
    {
        pw += characters.charat(math.floor(math.random)) * characters.length;
    }
    return pw;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
