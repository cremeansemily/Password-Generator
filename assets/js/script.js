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
 var allChars = [];
 var resultPass = "";


// 

 var Totallength = prompt("How long do you want your password to be? Must be between 8-128 characters");

 if(Totallength <8 || Totallength > 128){
     alert("Select a password that is between 8-128 characters.");
 }

// Confirm the rest of character conditions
 
 else{
     if(confirm("Do you want the password to contain uppercase letters?"))
     {
         Array.prototype.push.apply(allChars, uppercaseArray);
     }

     if(confirm("Do you want the password to contain lowercase letters?"))
     {
         Array.prototype.push.apply(allChars, lowercaseArray);
     }

     if(confirm("Do you want the password to contain numbers?"))
     {
         Array.prototype.push.apply(allChars, numberArray);
     }

     if(confirm("Do you want the password to contain any symbols or special characters?"))
     {
         Array.prototype.push.apply(allChars, symbolArray);
     }

     if(allChars.length===0)
     {
         alert("you must choose at least one selection");
     }

// generate password

     else{
         for(var i=0; i<Totlength; i++)
         {
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

// Display the result

     document.getElementById("password").innerHTML = resultPass;
}
 // Copy Button

function Copy(){

    document.querySelector("textarea").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
   }

