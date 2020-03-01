// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// Challenge: solve using Math class
// Methods: modulus, Number.isInterger

// Solution 1
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Solution 2
function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

// Solution 3
const isSquare = n => Number.isInteger(Math.sqrt(n));