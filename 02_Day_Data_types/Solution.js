// Exercise Level 1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of JavaScript"
console.log(challenge)

/* Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method */
let lCase = challenge.toLowerCase();
let uCase = challenge.toUpperCase();
console.log(lCase)
console.log(uCase)

//Cut (slice) out the first word of the string using substring() method
let cut = challenge.substring(0, 3)
console.log(cut)

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
cut = challenge.substring(3, challenge.length)
console.log(cut)

//Check if the string contains a word Script using includes() method
let includeString = challenge.includes("Script")
console.log(includeString)

/*Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method */
let singleSplit = challenge.split()
let eachSplit = challenge.split(" ")
console.log(singleSplit)
console.log(eachSplit)

let chlngString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let req = chlngString.split(",")
console.log(req)

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
challenge = challenge.replace('JavaScript', 'Python')
console.log(challenge)

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charAt15 = challenge.charAt(15);
console.log(charAt15)

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charPlace = challenge.charCodeAt("P")
console.log(charPlace)

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let firstA = challenge.indexOf('a')
console.log(firstA)

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lastA = challenge.lastIndexOf('a')
console.log(lastA)

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let qString1 = "You cannot end a sentence with because because because is a conjunction"
let firstBecause = qString1.indexOf("because")
console.log(firstBecause)

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let lastBecause = qString1.lastIndexOf('because')
console.log(lastBecause)

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let useSearch = qString1.search('because')
console.log(useSearch);

/*Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true */
let start = challenge.startsWith('3')
let end = challenge.endsWith('n')
console.log(start)
console.log(end)

//Use match() method to find all the a’s in 30 Days Of JavaScript
let mtch = challenge.match('a')
console.log(mtch)

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstString = "30 Days of "
let lastString = "Javasciprt"
let finalString = firstString + lastString
console.log(finalString)

//Use repeat() method to print 30 Days Of JavaScript 2 times
let repeats = finalString.repeat(2);
console.log(repeats)


// Excercise Level 2

//q1 and q2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof ('10') === typeof (10))
console.log(typeof (10) === typeof (10))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let myBool = parseFloat('9.8') === 10
console.log(myBool)
myBool = Math.floor(9.8) + 1 === 10
console.log(myBool)

//Check if 'on' is found in both python and jargon
let res = "Python".includes("on") === "jargon".includes("on")
console.log(res)

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let s1 = "I hope this course is not full of jargon."
let res1 = s1.includes("jargon")
console.log(res1)

// Generate a random number between 0 and 100 inclusively.
let res2 = Math.floor(Math.random() * 99 + 1)
console.log(res2)

// Generate a random number between 50 and 100 inclusively.
let res3 = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(res3)

// Generate a random number between 0 and 255 inclusively.
let res4 = Math.floor(Math.random() * 256)
console.log(res4)

// Access the 'JavaScript' string characters using a random number.
let s2 = 'JavaScript'
let res5 = Math.floor(Math.random() * s2.length + 1)
console.log(s2.charAt(res5))

// Use console.log() and escape characters to print the following pattern.
/* 1 1 1 1 1
   2 1 2 4 8
   3 1 3 9 27
   4 1 4 16 64
   5 1 5 25 125  */
for (let i = 1; i <= 5; i++) {
    console.log(i)
    for (let j = 1; j < 5; j++) {
        console.log(" " + Math.pow(i, j - 1) + " ")
    }
    console.log()
}



// Exercise level 3

//Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let text = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let matches = text.match(/love/gi)
let count = matches ? matches.length : 0

console.log(count); // Output: 3

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let s3 = "You cannot end a sentence with because because because is a conjunction."
let matchOrNot = s3.match(/because/gi)
let countOfBecause = matchOrNot ? matchOrNot.length : 0

console.log(countOfBecause)


// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher! %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// 1. Remove unwanted special characters using regex
const cleanedSentence = sentence.replace(/[%$@&#;!.,]/g, '');

// 2. Split into words using whitespace as a separator
const words = cleanedSentence.split(/\s+/);

// 3. Count frequencies (case-insensitive)
const wordCount = {};
words.forEach(word => {
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
});

// 4. Find the most frequent word(s)
let maxCount = 0;
let mostFrequentWords = [];

for (const word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        mostFrequentWords = [word];
    } else if (wordCount[word] === maxCount) {
        mostFrequentWords.push(word);
    }
}

console.log("Cleaned Sentence:\n", cleanedSentence);
console.log("\nMost Frequent Word(s):", mostFrequentWords, `(${maxCount} times)`);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let que = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let reqArray = que.split(" ")
let finalResult = 0;
// This regex matches any sequence of digits, ignoring punctuation like commas
let regex = /\d+/;

reqArray.forEach(word => {
    // 1. Use regex.test() instead of .includes()
    if (regex.test(word)) {
        // 2. Extract only the numbers, removing any trailing commas or periods
        let cleanNumber = word.match(regex)[0];
        finalResult += Number(cleanNumber);
    }
})

console.log(finalResult) // Output: 30000

