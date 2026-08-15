// Level 1
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = 21

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} ${yearsLeft === 1 ? 'year' : 'years'} to drive.`);
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = 30
let diff = yourAge - age
let result = Math.abs(diff)
if (diff >= 0) {
    console.log(`You are ${diff} years younger than me.`)
}
else {
    console.log(`I am ${result} years older than you.`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 5
let b = 10
console.log(a > b ? "A > B" : "B > A")

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let myNum = 10
let myResult = 10 % 2 === 0 ? "Yes" : "No"
console.log(myResult)

// Level 2
/*
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
function getGrade(score) {
    if (score >= 80 && score <= 100) return 'A';
    if (score >= 70 && score <= 79) return 'B';
    if (score >= 60 && score <= 69) return 'C';
    if (score >= 50 && score <= 59) return 'D';
    if (score >= 0 && score <= 49) return 'F';
    return 'Invalid score';
}

console.log(getGrade(85)); // A
console.log(getGrade(72)); // B
console.log(getGrade(45)); // F

/*
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let month = "October"; // or prompt("Enter month:")

switch (month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn.');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter.');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring.');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer.');
        break;
    default:
        console.log('Invalid month entered.');
}

// 3. Check if a day is weekend day or a working day. 
let day = "Saturday".toLowerCase()
if (day === 'saturday' || day === 'sunday') {
    console.log(`${day} is a weekend.`)
}
else {
    console.log(`${day} is a working day.`)
}


// Level 3

// 1. Write a program which tells the number of days in a month.

let monthInput = "February"; // or prompt("Enter a month:")
let year = 2024; // or Number(prompt("Enter a year:"))
month = monthInput.toLowerCase();

// Check for leap year (divisible by 4 and not 100, or divisible by 400)
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthInput} has 31 days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthInput} has 30 days.`);
        break;
    case 'february':
        let days = isLeapYear ? 29 : 28;
        console.log(`${monthInput} has ${days} days in ${year}.`);
        break;
    default:
        console.log('Invalid month entered.');
}
