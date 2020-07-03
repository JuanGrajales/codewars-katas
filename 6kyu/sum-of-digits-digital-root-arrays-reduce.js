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
// recursion
