// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
// Challenge: solve using find
// Methods: reduce, sort, filter, indexOf, lastIndexOf, Number, ternary operator, pop

// Solution 1
function findUniq(arr) {
  // do magic
  let obj = arr.reduce(
    (accum, curr) => (
      accum[curr] ? (accum[curr] += 1) : (accum[curr] = 1), accum
    ),
    {}
  );
  return Number(
    Object.entries(obj)[0][1] > 1
      ? Object.entries(obj)[1][0]
      : Object.entries(obj)[0][0]
  );
}

// Solution 2
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

// Solution 3
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}
