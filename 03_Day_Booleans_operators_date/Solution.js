/* 
1. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
 */

// Truthy Values
console.log(Boolean("Javascript"))
console.log(Boolean(-1))
console.log(true)

// Falsy Values
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))

/*
2. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

const s1 = 'jargon'
const s2 = 'python'
console.log(s2.length != s1.length)

/* 
3. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python

*/

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
const s3 = 'dragon'
const result = s3.includes('on') === s2.includes('on')
console.log(!result)

/*
4. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)



// Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/* const b = window.prompt("Enter Base: ")
const h = window.prompt("Enter Height: ")
const area = 0.5 * b * h
console.log(area) */


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/* const a = prompt(Number("Enter a: "))
const b = prompt(Number("Enter b: "))
const c = prompt(Number("Enter c: "))
const perimeter = a + b + c
console.log(perimeter) */

// If the length of your name is greater than 7 say, your name is long else say your name is short.
const myName = "Vansh"
if (myName.length > 7) {
    console.log("my name is long")
}
else {
    console.log("my name is short")
}