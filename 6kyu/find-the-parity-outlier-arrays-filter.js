// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
// Challenge: solve with reduce
// Methods: filter, find, spread operator

// Solution 1
function findOutlier(integers) {
  //your code here
  return integers.reduce((accum, int) => accum + Math.abs(int % 2), 0) === 1
    ? integers.find((int) => Math.abs(int % 2) !== 0)
    : integers.find((int) => Math.abs(int % 2) === 0);
}

// Solution 2
const findOutlier = (integers) =>
  integers.reduce((accum, int) => accum + Math.abs(int % 2), 0) === 1
    ? integers.find((int) => Math.abs(int % 2) !== 0)
    : integers.find((int) => Math.abs(int % 2) === 0);

// Solution 3
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
