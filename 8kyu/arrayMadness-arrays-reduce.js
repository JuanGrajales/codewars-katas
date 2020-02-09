// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/javascript
// Challenge: solve using reduce
// Methods: 

// Solution 1
function arrayMadness(a, b) {
  let sumA = a.reduce((accu, curr) => accu + (curr**2), 0)
  let sumB = b.reduce((accu, curr) => accu + (curr**3), 0)
  return sumA > sumB? true: false
}

// Solution 2
const arrayMadness = (a, b) => a.reduce((accu, curr) => accu + (curr**2), 0) > b.reduce((accu, curr) => accu + (curr**3), 0)? true : false

// Solution 3
const arrayMadness = (a, b) => a.reduce((accu, curr) => accu + (curr**2), 0) > b.reduce((accu, curr) => accu + (curr**3), 0)