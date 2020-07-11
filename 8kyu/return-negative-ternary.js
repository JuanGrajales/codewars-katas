// https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript
// Challenge: solve with ternary operator
// Methods: Math.abs

// Solution 1
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Solution 2
function makeNegative(num) {
  return -Math.abs(num);
}

// Solution 3
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
