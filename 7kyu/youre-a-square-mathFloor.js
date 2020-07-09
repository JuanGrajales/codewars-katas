// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript
// Challenge: solve with Math class
// Methods: Math.floor, Math.sqrt, Number.isInteger, spread operator

// Solution 1
var isSquare = function (n) {
  return n ** (1 / 2) - Math.floor(n ** (1 / 2)) ||
    isNaN(n ** 0.5 - Math.floor(n ** 0.5))
    ? false
    : true; // fix me
};

// Solution 2
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Solution 3
const isSquare = (n) => Number.isInteger(Math.sqrt(n));
