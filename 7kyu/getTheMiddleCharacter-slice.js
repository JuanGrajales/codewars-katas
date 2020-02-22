// https://www.codewars.com/kata/56747fd5cb988479af000028
// Challenge: solve using slice
// Methods: substr, charAt, slice

// Solution 1
function getMiddle(s){
  // if the string is even then it will get the middle left index, if its odd then it will get the middle index
  let startingIndex = Math.ceil(s.length / 2 - 1)
  let endingIndex =  s.length % 2 === 0 ? 2 : 1
  return s.substr(startingIndex, endingIndex);
}

// Solution 2
function getMiddle(s) {
  let middle = s.length / 2;
  return s.length % 2? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1);
}

// Solution 3
function getMiddle(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}