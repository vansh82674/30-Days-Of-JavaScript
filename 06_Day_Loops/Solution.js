const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Level 1
/*
1. Iterate 0 to 10 using for loop, do the same using while and do while loop

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

3. Iterate 0 to n using for loop
*/
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

for (let i = webTechs.length - 1; i >= 0; i--) {
    console.log(webTechs[i])
}

let n = mernStack.length
for (let i = 0; i < n; i++) {
    console.log(mernStack[i])
}

/* 
4. Print this pattern
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
}

/* 
5. Print the pattern
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i} `)
}

/*
6. Print the pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i} `)
}


/*
7. Use for loop to iterate from 0 to 100 and print only even numbers

8. Use for loop to iterate from 0 to 100 and print only odd numbers
*/

let evens = []
let odd = []

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) evens.push(i)
    else odd.push(i)
}
console.log(odd)
console.log(evens)

/*
9. Use for loop to iterate from 0 to 100 and print only prime numbers
*/

let primes = []

for (let i = 0; i <= 100; i++) {
    if (i <= 1) continue // 0 and 1 are not prime numbers

    let isPrime = true
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        primes.push(i) // or console.log(i)
    }
}

console.log(primes)

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
for (let i = 0; i < evens.length; i++) {
    evenSum += evens[i]
}
console.log(evenSum)
let oddSum = 0;
for (let i = 0; i < odd.length; i++) {
    oddSum += odd[i]
}
console.log(oddSum)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr = [evenSum, oddSum]
console.log(arr)

// 13. and 14. Develop a small script which generate array of 5 random numbers
let reqArray = []
for (let i = 0; i < 5; i++) {
    let num = Math.floor((Math.random() * 100) + 1)
    reqArray.push(num)
}
console.log(reqArray)

// 15. Generates a random alphanumeric string and slices 6 characters
const randomId = Math.random().toString(36).substring(2, 8)
console.log(randomId)


// Level 2
// 1. Develop a small script which generate any number of characters random id:
let f = 20;
const randomId2 = Math.random().toString(36).substring(2, f)
console.log(randomId2)

// 2. Write a script which generates a random hexadecimal number:
const hexChars = '0123456789abcdef'
let hexColor = '#'

for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length)
    hexColor += hexChars[randomIndex]
}

console.log(hexColor)

// 3. Write a script which generates a random rgb color number:
const r = Math.floor(Math.random() * 256)
const g = Math.floor(Math.random() * 256)
const b = Math.floor(Math.random() * 256)

const rgbColor = `rgb(${r},${g},${b})`
console.log(rgbColor)

// 4. Using the above countries array, create the following new array.
const newCountries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// 5. Using the above countries array, create an array for countries length'.
let cLen = []
newCountries.forEach((country) => {
    cLen.push(country.length)
})
console.log(cLen)

// 6. Use the countries array to create the following array of arrays: 
let newC = []
newCountries.forEach((country) => {
    let countryCode = country.substring(0, 3)
    newC.push([country, countryCode, country.length])
})
console.log(newC)

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let requiredArray = []
newCountries.forEach((country) => {
    if (country.toLowerCase().includes('land')) {
        requiredArray.push(country)
    }
})

if (requiredArray.length > 0) {
    console.log(requiredArray)
} else {
    console.log("All these countries are without 'land'.")
}
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let requiredArray2 = []
newCountries.forEach((country) => {
    if (country.toLowerCase().includes('ia')) {
        requiredArray2.push(country)
    }
})

if (requiredArray2.length > 0) {
    console.log(requiredArray2)
} else {
    console.log("These are countries ends without 'ia'.")
}

// 9. Using the above countries array, find the country containing the biggest number of characters.

let longestCountry;
let longestLength = 0;
newCountries.forEach((country) => {
    if (country.length > longestLength) {
        longestCountry = country
        longestLength = country.length
    }
})

console.log(longestCountry)

// 10. Using the above countries array, find the country containing only 5 characters.
let requiredArray3 = []
newCountries.forEach((country) => {
    if (country.length == 5) {
        requiredArray3.push(country)
    }
})
console.log(requiredArray3)

// 11. Find the longest word in the webTechs array
let longestWeb
longestLength = 0
webTechs.forEach((tech) => {
    if (tech.length > longestLength) {
        longestWeb = tech
        longestLength = tech.length
    }
})
console.log(longestWeb)

// 12. Use the webTechs array to create the following array of arrays:
requiredArray3 = []
webTechs.forEach((tech) => {
    requiredArray3.push([tech, tech.length])
})
console.log(requiredArray3)

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.
let ans = ''
mernStack.forEach((mtech) => {
    ans += mtech[0]
})
console.log(ans)

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const tech of webTechs) {
    console.log(tech)
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
let low = 0;
let high = fruit.length - 1;
while (low < high) {
    let temp = fruit[low]
    fruit[low] = fruit[high]
    fruit[high] = temp
    low++
    high--
}
console.log(fruit)

// 16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j])
    }
}

// Level 3

// 1. Copy countries array (Avoid mutation)
const countriesCopy = [...countries] // or countries.slice()

// 2. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort()
console.log('Sorted Countries:', sortedCountries)

// 3. Sort the webTechs array and mernStack array
const sortedWebTechs = [...webTechs].sort()
const sortedMernStack = [...mernStack].sort()
console.log('Sorted WebTechs:', sortedWebTechs)
console.log('Sorted MERN Stack:', sortedMernStack)

// 4. Extract all the countries containing the word 'land' from the countries array and print it as array
const countriesWithLand = []
for (const country of countries) {
    if (country.toLowerCase().includes('land')) {
        countriesWithLand.push(country)
    }
}
console.log('Countries with "land":', countriesWithLand)

// 5. Find the country containing the highest number of characters in the countries array
let longestCountry2 = ''
for (const country of countries) {
    if (country.length > longestCountry2.length) {
        longestCountry2 = country
    }
}
console.log('Country with highest characters:', longestCountry2)

// 6. Extract all the countries containing only four characters from the countries array and print it as array
const fourCharCountries = []
for (const country of countries) {
    if (country.length === 4) {
        fourCharCountries.push(country)
    }
}
console.log('4-character countries:', fourCharCountries)

// 7. Extract all the countries containing two or more words from the countries array and print it as array
const multiWordCountries = []
for (const country of countries) {
    if (country.includes(' ') || country.split(' ').length >= 2) {
        multiWordCountries.push(country)
    }
}
console.log('Countries with two or more words:', multiWordCountries)

// 8. Reverse the countries array, capitalize each country, and store it as an array
const reversedCapitalizedCountries = []
for (let i = countries.length - 1; i >= 0; i--) {
    reversedCapitalizedCountries.push(countries[i].toUpperCase())
}
console.log('Reversed & Capitalized:', reversedCapitalizedCountries)
