// https://www.codewars.com/kata/546e2562b03326a88e000020
// Challenge: solve using map
// Methods: toString, join, split, Number, parseInt


// Solution 1
function squareDigits(num){
  let string = num.toString();
  let result = [];
  for (let i = 0; i < string.length; i++){
      result[i] = string[i] * string[i];
  }
  return Number(result.join(''));
}

// Solution 2
function squareDigits(num){
  let result = num
    .toString()
    .split('')
    .map(number => number * number)
    .join('')
   
  return parseInt(result)
}

// Solution 3
function squareDigits(num){
  return Number(('' + num)
  .split('')
  .map(number => number**2)
  .join('')); 
}