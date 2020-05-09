// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
// Prereqs: arrays, for loops, variables, functions
// Challenge: solve using a for loop
// Methods: forEach

// Solution 1
function pickIt(arr){
  var odd=[],even=[];
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0)
      even.push(arr[i])
    else
      odd.push(arr[i])
  }
  
  return [odd,even];
}

// Solution 2
function pickIt(arr){
  var odd=[],even=[];
  
  for(let element of arr){
    if(element % 2 === 0)
      even.push(element)
    else
      odd.push(element)
  }
  
  return [odd,even];
}

// Solution 3
function pickIt(arr){
  var odd=[],even=[];
  
  arr.forEach(element => {
    if(element % 2 === 0)
      even.push(element)
    else
      odd.push(element)
  });
  
  return [odd,even];
}

// Solution 4
function pickIt(arr){
  var odd=[],even=[];
  
  arr.forEach(element => {
    element % 2 === 0 ? even.push(element) : odd.push(element)
  });
  
  return [odd,even];
}

// Solution 5
const pickIt = (arr) => {
  var odd=[],even=[];
  
  arr.forEach(element => {
    element % 2 === 0 ? even.push(element) : odd.push(element)
  });
  
  return [odd,even];
}