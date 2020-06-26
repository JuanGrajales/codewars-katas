// 7kyu - Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

// solution2
const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);