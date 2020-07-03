// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
// Challenge: solve with filter
// Methods:

// Solution 1
function arrayDiff(a, b) {
  return a.filter((num, i) => {
    return !b.includes(num);
  });
}

// Solution 2
const arrayDiff = (a, b) => a.filter((num, i) => !b.includes(num));
