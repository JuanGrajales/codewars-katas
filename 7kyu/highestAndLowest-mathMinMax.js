// https://www.codewars.com/kata/554b4ac871d6813a03000035
// Challenge: solve 
// Methods: split, Math.min, Math.max, sort, for loop

// Solution 1
function highAndLow(numbers){

  let numArray = numbers.split(" ");
  let max = Number(numArray[0]);
  let min = Number(numArray[0]);
  
  for(let i = 1; i< numArray.length; i++){
    if(Number(numArray[i]) > max) {
      max = Number(numArray[i]);
    }
    if(Number(numArray[i]) < min) {
      min = Number(numArray[i]);
    }
  }

  return max + " " + min; 
}

// Solution 2
function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a, b) => { 
    return a - b 
  });
  return arr[arr.length -1] + ' ' + arr[0];
}

// Solution 3
function highAndLow(numbers){
  arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}