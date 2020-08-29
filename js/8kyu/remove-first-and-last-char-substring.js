// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Challenge: solve with substring
// Methods: slice

// Solution 1
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// Solution 2
function removeChar(str) {
  return str.slice(1, -1);
}
