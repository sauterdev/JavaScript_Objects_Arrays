console.log("Hello World!\n==========\n");
//Harrisons Code Wars problem
let harrisonNumbers = [5, 7, 6, 3, 1];
function noOperatorsAdd(arr) {
let sum =[];
 for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i]; j++) {
        sum.push(1);
    }
 }
 return sum.length;
}
let harrisonProblem = noOperatorsAdd(harrisonNumbers);
console.log(harrisonProblem);

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i <arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let exerciseOne = arraySum(numbers);
console.log(exerciseOne);





// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}
book.title = `The Stand`
book.pages = 800;
book.timesRead = 1;


function  bookInfo() { //create function outside of object so it can be added to other objects
    return console.log(`${this.title} is a ${this.pages} page book that I have read ${this.timesRead} time.`);
}
book.info = bookInfo;

book.info();

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.split(``).reverse().join(``).split(` `).reverse().join(` `));

function reverseLetters(x) {
    let myArr = sentence.split(` `);
    for (let i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i].split(``).reverse().join(``);
}
return myArr.join(` `);
}
let exerciseThree = reverseLetters(sentence);
console.log(exerciseThree);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";


    function csvParse(csv) {
    let newArr = csvData.split(`\n`);
    let strHeaders = newArr.shift().split(`,`);
    let parsedArray =[];
    for (let i = 0; i < newArr.length; i++) {
    let valuesArr = newArr[i].split(`,`);
    parsedArray.push(
        {
            [strHeaders[0]]: valuesArr[0],
            [strHeaders[1]]: valuesArr[1],
        }
    );    
    }
    return parsedArray;
}

let parsed = csvParse(csvData)
console.log(parsed);


