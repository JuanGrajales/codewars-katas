// https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript
// Challenge: solve with recursion
// Methods: Math.min, Math.max, Math.abs, reduce

// Solution 1
function getSum(a, b) {
  //Good luck!
  let arr = [...Array(Math.abs(a - b) + 1)].reduce(
    (accum) => accum + fnum++,
    0,
    (fnum = a < b ? a : b)
  );
  return arr;
}

// Solution 2
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
