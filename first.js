// Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

{ var age = prompt("enter your age");
console.log(age);
if (age >= 18){
    console.log("You are an adult.");
} else { 
    console.log("you are a minor.");

}
}

// Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

{ var num = prompt("enter a number");
console.log(num);
if (num > 0) { 
    console.log("positive number");
} else {
    console.log("not positive");
}
}

// Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

{ var num = prompt("enter a number");
console.log(num);
if (num %2 === 0){
    console.log("even number");
} else{
    console.log("odd number");
}
}

// Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

{ var username = prompt("enter your name");
console.log(username);
if (username === "admin"){
    console.log("welcome, admin!");
}else {
    console.log("Access denied.");
} 
}

// Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

{ var num1 = prompt("enter first number");
var num2 = prompt("enter second number");
console.log(num1 + num2);
if (num1===num2) {
    console.log("both numbers are the same");
}else {
    console.log("the numbers are different");
}
}

// Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".
{ var num1 =prompt("enter first number");
var num2 = prompt("enter second number");
console.log(num1 + num2)
if(num1 > num2) {
    console.log("first is larger");
}else {
    console.log("second is larger");
}
}

// Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

{ var num = prompt("enter a number");
    console.log(num);
if(num > 100) {
    console.log("too big!");
}else {
    console.log("within range");
}

}

// Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

{ var score = prompt("enter a score");
console.log(score);
if(score >= 50){
    console.log("You passed!");
}else{
    console.log("you failed.")
}
}

// Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

{ var temp = prompt("enter a temperature");
console.log(temp);
if(temp > 30) {
    console.log("it's hot!");
}else{
    console.log("it's not hot");
}
}

// Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

{ var num = prompt("enter a number");
    console.log(num);
if (num === 0){
    console.log("zero!");
}else {
    console.log("Not zero");
}
}

// Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

{ var age = prompt("enter your age");
console.log(age);
if (age >= 60) {
    console.log("you are a senior citizen.");
}else {
    console.log("you are not a senior.");
}
}

// Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

{ var name = prompt("enter your name");
    console.log(name);
if (name === " Alice" ){
    console.log("Hi, Alice!");
} else {
    console.log("you're not Alice!");
}
}

// Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

{ var pass = prompt("enter your password");
if (pass === 12345) {
    console.log("correct password");
}else {
    console.log("wrong password.");
}
 } 

//  Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

{ var time = prompt("enter the timing");
console.log(time);
if (time < 12  ) {
    console.log("good morning!");
} else{
    console.log("good afternoon!");
}
}

// Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

{ var num = prompt("enter a number");
console.log(num);
if (num %5 === 0) {
    console.log("divisible by 5");
} else {
    console.log("not divisible by 5")
}
}

// Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

{ var game = prompt("do you want to play game?");
 console.log(game);
if (game === "yes") {
    console.log("lets play!");
} else {
    console.log("maybe next time!");
}
}

// Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

{ var color = prompt("enter your favorite color");
console.log(color);
if (color === "blue") {
    console.log("cool choice!");
} else {
    console.log("interesting color!");
}
}

// Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

 { var day = prompt("enter a day");
console.log(day);
if (day === "sunday") {
    console.log("weekend!");
} else {
    console.log("weekday.");
}
 }

//  Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

{ var fruit = prompt("enter a fruit");
console.log(fruit);
if (fruit === "banana " || fruit === "apple" ) {
    console.log("we have that!");
} else {
    console.log("sorry, out of stock.");
}
}

// Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

{ var input = prompt("type start to begin");
console.log(input);
if (input === "start") {
    console.log("game started!");
} else {
    console.log("waiting for input...");
}
}


// Age-Based Grade Check

{ var marks = prompt("enter your marks!");
console.log(marks);
if (marks >= 80 && marks <=100) {
    console.log("distinction");
} else if ( marks >= 50 && marks < 80) {
    console.log("pass");
} else if (marks >= 0 && marks < 50) {
    console.log("fail");
} else {
    console.log("invalid marks!!!");
}
}

// Discount Eligibility Based on Age and Membership

{ var age = prompt("enter your age!");
console.log(age);
if ( age >= 60) {
    console.log("Senior Premium Discount");
} else if (age < 60 && age > 30) {
    console.log("premium discount");
} else if ( age > 18 && age < 20 ) {
    console.log("student discount");
} else {
    console.log("No discount");
}
}

// Login and Email Verification

{ var isLoggedIN = prompt("Are you logged in? (yes/no)") === "yes";
 var isEmailVerified = prompt("Is your email verified? (yes/no)") === "yes";
 if (isLoggedIN && isEmailVerified) {
        console.log("Access granted");
 } else if (isLoggedIN && !isEmailVerified) {
        console.log("Please verify your email");
} else {
    console.log("Please log in")
}
}

// Contest Eligibility

{ var age = prompt("enter your age");
    var country = prompt("enter your country");
    var isBanned = prompt("are you banned? (yes/no)") === "yes";
    if (age < 18 || age > 35) {
        console.log("not eligible due to age");
    } else if (country !== "pakistan" && country !== "india") {
        console.log (" not eligible due to region");
    } else if (isBanned) {
        console.log("not eligible as you are banned");
    } else {
        console.log("eligible for the contest")
    }
}

// Subscription Access Check
{ var plan = prompt("enter your plan (premium/free)");
    var LoggedIN = prompt("are you logged in? (yes/no)") === "yes";
    if (LoggedIN) { 
        if (plan === "premium") {
             console.log("Welcome Premium User");
         } else if (plan === "free") {
            console.log("Welcome Free User");
         } else if (!LoggedIN ) {
            console.log("Please log in to continue");
         } else {
            console.log("Invalid subscription");
         }

}
}

// Product Purchase Validation

{ var price = prompt("Enter product price:");
var stock = prompt("Enter product stock:");
var userIsMember = prompt("Are you a member? (yes/no)") === "yes";

if (stock === 0) {
  console.log("Out of stock");
} else if (price > 1000 && userIsMember) {
  console.log("Buy now with discount");
} else if (stock > 0) {
  console.log("Buy now");
} else {
  console.log("Invalid product");
}
}

// Work Hours Check

{ var hoursWorked = prompt("Enter hours worked:");
var isWeekend = prompt("Is it weekend? (yes/no)") === "yes";

if (hoursWorked === 0) {
  console.log("No work");
} else if (hoursWorked > 0 && isWeekend) {
  console.log("Weekend work");
} else if (hoursWorked >= 40 && !isWeekend) {
  console.log("Overtime");
} else {
  console.log("Regular hours");
}
}

// Age and Gender Classification

 { var age = prompt("Enter age:");
var gender = prompt("Enter gender (male/female):");

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  if (gender === "male") {
    console.log("Teen Male");
  } else if (gender === "female") {
    console.log("Teen Female");
  }
} else {
  console.log("Adult");
}
 }

//  Weather Warning System

{ var temp = prompt("Enter temperature:");
var humidity = prompt("Enter humidity:");

if (temp >= 40 && humidity >= 60) {
  console.log("Heatwave Alert");
} else if (temp >= 40 && humidity < 60) {
  console.log("Hot and Dry");
} else if (temp <= 20) {
  console.log("Cool Weather");
} else {
  console.log("Moderate");
}
}

// Score Grading System

{ var score = prompt("Enter score (0-100):");

if (score < 0 || score > 100) {
  console.log("Invalid Score");
} else if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else if (score >= 50) {
  console.log("Average");
} else if (score >= 30) {
  console.log("Poor");
} else {
  console.log("Fail");
} 
}

// Course Access Control

{ var loggedIn = prompt("Are you logged in? (yes/no)") === "yes";
var enrolled = prompt("Are you enrolled? (yes/no)") === "yes";
var banned = prompt("Are you banned? (yes/no)") === "yes";

if (!loggedIn) {
  console.log("Please log in");
} else if (!enrolled) {
  console.log("Enroll in course first");
} else if (banned) {
  console.log("User is banned");
} else {
  console.log("Access granted");
}
 }

//  Driving Conditions

{ var speed = prompt("Enter your speed:");
var hasLicense = prompt("Do you have a license? (yes/no)") === "yes";

if (!hasLicense) {
  console.log("Driving without license");
} else if (speed > 120) {
  console.log("License suspended");
} else if (speed > 100 && speed <= 120) {
  console.log("Warning");
} else {
  console.log("Normal driving");
}
}

// Order Processing Status

{ var paymentComplete = true;
var shipped = true;
var paymentPending = false;
var transactionFailed = false;

if (paymentComplete && shipped) {
  console.log("Order on the way");
} else if (paymentComplete && !shipped) {
  console.log("Preparing your order");
} else if (paymentPending) {
  console.log("Awaiting payment");
} else if (transactionFailed) {
  console.log("Payment failed");
}
}

// Battery Status Checker

{ var level = prompt("enter your bettery level");
var charging = true; 
if (level === 100) {
  console.log("Fully Charged");
} else if (level < 100 && charging) {
  console.log("Charging");
} else if (level < 20 && !charging) {
  console.log("Low Battery");
} else {
  console.log("Battery OK");
}
}

// Browser and Device Compatibility Check

{ var browser = prompt("enter the browser name");
var device = prompt("enter device name");

if (browser === "Chrome" && device === "Desktop") {
  console.log("Full features enabled");
} else if (browser === "Chrome" && device === "Mobile") {
  console.log("Limited mobile features");
} else {
  console.log("Please switch to Chrome");
}
}

// python questions

// Speed Limit Warning

{ var speed = prompt("Enter your speed:");

if (speed < 30) {
  console.log("Too slow");
} else if (speed >= 30 && speed <= 60) {
  console.log("Safe speed");
} else if (speed >= 61 && speed <= 100) {
  console.log("Speeding");
} else {
  console.log("Dangerously fast");
}
}

// Library Book Return Fine

{ var lateDays = prompt("Enter number of late days:");
var fine = 0;

if (lateDays >= 1 && lateDays <= 5) {
  fine = lateDays * 1;
} else if (lateDays >= 6 && lateDays <= 10) {
  fine = lateDays * 2;
} else if (lateDays >= 11) {
  fine = lateDays * 5;
}
console.log(fine);
}

// Event Entry Eligibility

{ var age = prompt("Enter your age:");
let hasTicket = prompt("Do you have a valid ticket? (yes/no)") === "yes";

if (age >= 18 && hasTicket) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}
}

// Smartphone Battery Status

{ var batteryLevel = prompt("Enter battery level (0-100):");

if (batteryLevel >= 100) {
  console.log("Battery full");
} else if (batteryLevel >= 50 && batteryLevel < 79) {
  console.log("Battery good");
} else if (batteryLevel >= 20 && batteryLevel < 49) {
  console.log("Battery low");
} else {
  console.log("charge now!");
}
}

// Clothing Recommendation

{ var temperature = prompt("Enter temperature in °C:");
if (temperature < 10) {
  console.log("Heavy jacket");
} else if (temperature >= 10 && temperature <= 20) {
  console.log("Sweater");
} else if (temperature >= 21 && temperature <= 30) {
  console.log("T-shirt");
} else {
  console.log("Light clothes");
}
}

