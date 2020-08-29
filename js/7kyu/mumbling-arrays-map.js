// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript
// Challenge: solve using map (if that was easy practice more solving it using forEach, for loop, while loop)
// Methods: split, join, map, toLowerCase, toUpperCase, spread operator, repeat

// Solution 1
function accum(s) {
  return s
  .split('')
  .map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index))
  .join('-')
}

// Solution 2
const accum = (s) => s.split('').map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index)).join('-')

// Solution 3
function accum(s) {
  return [...s]
  .map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index))
  .join('-')
}

// Solution 4
const accum = (s) => [...s].map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index)).join('-')