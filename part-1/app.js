// ans to the Q. No: 01
// check leap year
var year = 2004;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}


// Ans to the Q No. :04
const num1 = 9;
const num2 = 13;
const num3 = 12;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

// Ans to the Q. No.: 05 
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var remainingHours = Math.floor(hours);
    var minutes = (hours - remainingHours) * 60;
    var remainingMinutes = Math.round(minutes);
    return " Given Number " + "" + num + " = " + remainingHours + " hour(s) and " + remainingMinutes + " minute(s).";
}

console.log(timeConvert(60));

// Ans to the Q. No. : 06
var dob = new Date("01-05-2000");
var monthDiff = Date.now() - dob.getTime();
var ageDate = new Date(monthDiff);
var year = ageDate.getUTCFullYear();
var age = Math.abs(year - 1970);
console.log(" Age =  " + age + " years ");

// Ans to the Q. No. : 07
var array = [1, 2, 3, 4, 5,6];

var sum = array.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(" Array of sum is: " , sum);