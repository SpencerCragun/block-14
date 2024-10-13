// prompt the user to input numbers seperated by commas
let userString = prompt(`Please enter as many numbers as you'd like, seperated by columns`);

//turn users input into an array
let userArray = userString.split(`,`);

console.log(userString);
console.log(userArray);

// convert strings array into nums
let userNum = userArray.map(Number);
console.log(userNum);

//create these fuctions:
// getLength -> how many numbers are in the array
const getLength = (userNum.length);
console.log(getLength);

// getSum -> the total when you add up all of the numbers in the array
let getSum = 0
for(let i = 0; i < userNum.length; i++){
getSum += userNum[i];
}
console.log(getSum)

// getMean -> the average of all of the numbers in the array
let getMean = getSum / userNum.length
console.log(getMean)

// getMin -> the smallest number in the array
let getMin = Math.min(...userNum)
console.log(getMin)

// getMax -> the largest number in the array
let getMax = Math.max(...userNum)
console.log(getMax)

// getRange -> the largest number minus the lowest number in the array
let getRange = getMax - getMin
console.log(getRange)

// getEvens -> a new array of all the even numbers
let getEvens = [];
for(let i = 0; i < userNum.length; i++){
  if(userNum[i] % 2 === 0)
    getEvens.push(userNum[i]);
}
console.log(getEvens)
// getOdds -> a new array of all the odd numbers
let getOdds = [];
for(let i = 0; i < userNum.length; i++){
  if(userNum[i] % 2 !== 0)
    getOdds.push(userNum[i]);
}
console.log(getOdds)
