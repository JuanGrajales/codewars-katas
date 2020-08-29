// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// Solution 1
function solve(s) {
  var numUpper = (s.match(/[A-Z]/g) || []).length;
  var numLower = (s.match(/[a-z]/g) || []).length;
  return numUpper > numLower ? s.toUpperCase() : s.toLowerCase();
}
