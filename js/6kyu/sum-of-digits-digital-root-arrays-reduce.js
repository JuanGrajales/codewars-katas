// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript
// Challenge: solve using reduce
// Methods: String, Number, ternary operator

// Solution 1
function digital_root(n) {
  // ...
  let single = false;
  while (!single) {
    n = String(n)
      .split("")
      .reduce((accum, curr) => accum + Number(curr), 0);
    single = n >= 10 ? false : true;
  }
  return n;
}

// Solution 2
// n = 1  answer: 1
// n = 2  answer: 2
// n = 3  answer: 3
// n = 4  answer: 4
// n = 5  answer: 5
// n = 6  answer: 6
// n = 7  answer: 7
// n = 8  answer: 8
// n = 9  answer: 9
// n = 10 answer: 1
// n = 11 answer: 2
// n = 12 answer: 3
// n = 13 answer: 4
// n = 14 answer: 5
// n = 15 answer: 6
// n = 16 answer: 7
// n = 17 answer: 8
// n = 18 answer: 9
// n = 19 answer: 1
// values that sum up up to a multiple of 9 will be incorrect with only n%9 so came up with the following
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
