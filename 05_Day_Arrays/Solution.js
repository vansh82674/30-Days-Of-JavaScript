// Excercise Level 1
/*
Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
*/

let arr = Array()
let emptyArray = []
arr = [1, 2, 3, 4, 5, 6]
console.log(emptyArray.length) // 0
console.log(arr[0]) // first
console.log(arr[Math.floor(arr.length / 2)]) // middle
console.log(arr[arr.length - 1]) // last element 
const mixedDataTypes = [
    'JavaScript',              // string
    2026,                      // number
    true,                      // boolean
    { skills: ['HTML', 'CSS'] }, // object
    ['React', 'Node'],         // array
    null,                      // null
    undefined                  // undefined
];

console.log(mixedDataTypes.length); // 7

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(arr.length / 2)])
console.log(itCompanies[itCompanies.length - 1])
for (let x = 0; x < itCompanies.length; x++) {
    console.log(itCompanies[x])
    itCompanies[x] = itCompanies[x].toUpperCase()
    console.log(itCompanies[x])
}

let s1 = itCompanies.toString()
console.log(s1)

let result = [];

for (let i = 0; i < itCompanies.length; i++) {
    // Splitting by 'o' (case-insensitive) gives (number of 'o' + 1) segments
    let oCount = itCompanies[i].toLowerCase().split('o').length - 1;
    if (oCount > 1) {
        result.push(itCompanies[i]);
    }
}

console.log(result); // [ 'Facebook', 'Google', 'Microsoft' ]

let sortedArray = itCompanies.sort()
console.log(sortedArray)

let reversedArray = itCompanies.reverse()
console.log(reversedArray)

let firstThree = itCompanies.slice(0, 3)
console.log(firstThree)

let lastThree = itCompanies.slice(Math.floor(itCompanies.length / 2), itCompanies.length)
console.log(lastThree)

let middleFromSlice = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
console.log(middleFromSlice)

// 1. Remove the first IT company from the array
itCompanies.shift();
// or: itCompanies.splice(0, 1)
console.log(itCompanies);

// 2. Remove the middle IT company or companies from the array
// If odd length, removes 1; if even length, removes 2
let middleIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndex - 1, 2); // remove 2 middle items if even
} else {
    itCompanies.splice(middleIndex, 1);     // remove 1 middle item if odd
}
console.log(itCompanies);

// 3. Remove the last IT company from the array
itCompanies.pop();
// or: itCompanies.splice(itCompanies.length - 1, 1)
console.log(itCompanies);

// 4. Remove all IT companies
itCompanies.splice(0);
// or: itCompanies.length = 0;
console.log(itCompanies); // []


// Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const countries = require('./countries')
const webTechs = require('./web_techs')

console.log(countries)
console.log(webTechs)

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// Remove punctuation (commas, periods, etc.) and split into words
let words = text.replace(/[.,]/g, '').split(' ')

console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.pop()
console.log(shoppingCart)

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === "Tea") {
        shoppingCart[i] = "Green Tea"
    }
}

console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let res = countries.includes("Ethiopia")
console.log(res ? "ETHOPIA" : false)

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let res2 = webTechs.includes("Saas")
let ifIncludes = res2 ? console.log("Sass is a CSS preprocess") : webTechs.push("Saas")
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.1 Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// 1.2 Find the median age (one middle item or two middle items divided by two)
let median;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    median = (ages[mid - 1] + ages[mid]) / 2;
} else {
    median = ages[mid];
}
console.log('Median age:', median);

// 1.3 Find the average age (all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
const average = sum / ages.length;
console.log('Average age:', average);

// 1.4 Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;
console.log('Age range:', ageRange);

// 1.5 Compare the value of (min - average) and (max - average), use abs() method
const minMinusAvg = Math.abs(minAge - average);
const maxMinusAvg = Math.abs(maxAge - average);
console.log('|min - avg|:', minMinusAvg);
console.log('|max - avg|:', maxMinusAvg);
console.log('Is |min - avg| > |max - avg|?', minMinusAvg > maxMinusAvg);

// 2.0 Slice the first ten countries from the countries array
// 2.1 Find the middle country(ies) in the countries array
let res4 = countries.slice(0, 11)
console.log(res4)
let midC = Math.floor(countries.length / 2)
console.log(countries[midC])

//3.0 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countries.push("India")
// 3.0 Divide the countries array into two equal arrays if it is even. 
// If countries array is not even, one more country for the first half.

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
    let mid = countries.length / 2;
    firstHalf = countries.slice(0, mid);
    secondHalf = countries.slice(mid);
} else {
    let mid = Math.ceil(countries.length / 2); // gives 1 extra to first half
    firstHalf = countries.slice(0, mid);
    secondHalf = countries.slice(mid);
}

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);
