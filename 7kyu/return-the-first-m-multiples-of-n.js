// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
// Challenge: solve with map
// Methods:

// Solution 1
function multiples(m, n) {
  let arr = [];
  for (let i = 1; i <= m; i++) {
    // this will run m number of times
    arr.push(n * i); // for every loop you will add to the arr n*i
  }
}
