 
function greetUser(name) {
    return "Hey, " + name + "! Welcome To My Webpage Porgram.";
}

 
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
 
var userName = prompt("Enter Your Name Please:");
 
alert(greetUser(userName));
 
var userNumber = parseInt(prompt("Enter a Positive Integer To Check For Primality:"));

 
if (isPrime(userNumber)) {
    alert(userNumber + " It is a prime number.");
} else {
    alert(userNumber + " It is not a prime number.");
}
  


 