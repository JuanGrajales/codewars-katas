// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
// Challenge: solve with filter
// Methods: concat, spread operator

// Solution 1
var moveZeros = function (arr) {
  // TODO: Program me
  let arr2 = arr.filter((el) => el !== 0);
  return [
    ...arr2,
    ..."0"
      .repeat(arr.length - arr2.length)
      .split("")
      .map(Number),
  ];
};

// Solution 2
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
