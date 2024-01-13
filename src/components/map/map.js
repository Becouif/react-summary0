// explaination about map, filter and reduce and usage
import emojipedia from "../emojipedia";


let numbers = [2, 33,8, 45, 4];
// Map = Create a new array by doing something with each item in an array 

// here we create the function dat will do something with each item or function do something with each value d way i want 
function doubleOne(x){
  return x * 2
}

const newNumb = numbers.map(doubleOne);
console.log(newNumb);
// i think map is similar to foreach 
// doing the same thing with foreach 
var newNumbers = [];
function double(x){
  newNumbers.push(x * 2);
}

numbers.forEach(double)
console.log(newNumbers)


// Filter - Create a new array by keeping the items that return true 

let numbersArray =[3, 36,2,48,5]

const newNumb1=numbersArray.filter(function (num){
  return num > 10;
})
console.log(newNumb1);
// Filter take function that when return true will add the number to the new array newNumb1 


// Reduce 
// Reduce - Accumulate a value by doing something to each item in an array 

let numbers1 = [5,75,89,10,2,3];
// using javascript 
let newNumber1 = 0;

numbers1.forEach(function (currentNumber){
  newNumber1 += currentNumber
})
console.log(newNumber1);
// end of using foreach 


numbers1.reduce(function (accumulator, currentNumber){
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = "+ currentNumber);
  return accumulator + currentNumber
})


// find = find first item that matches 
// its stops afer finding the first one 
numbers1.find(function (num){
  return num > 10;
})

// FindIndex = find the index of the first item match 

const indexNum = numbers1.findIndex(function (num){
  return num > 10;
})
console.log(indexNum);

// START OF CHALLENGE IN THE COURSE 

function emojiwork(){
  function inside(data){
    let meaning = data.meaning;
    return meaning.substring(0,99);
  }
  const meaningArray = emojipedia.map(inside);
  console.log(meaningArray);
}

export default emojiwork;
