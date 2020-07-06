// https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript
// Challenge: solve using reduce
// Methods: reduce, sort, filter, indexOf, lastIndexOf, Number, ternary operator, pop

// Solution 1
var countBits = function (n) {
  // Program Me
  return [...n.toString(2)].reduce((accum, curr) => accum + Number(curr), 0);
};

// Solution 2
const countBits = (n) => n.toString(2).split("0").join("").length;

// Solution 3
var countBits = function (n) {
  return n.toString(2).replace(/0/g, "").length;
};

// Solution 4
var countBits = function (n) {
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};
