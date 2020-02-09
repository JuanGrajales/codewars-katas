// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Challenge: solve using regex (if that was too easy try using filter to solve the challenge)
// Methods: replace, match

// Solution 1
function getCount(str) {
  var vowelsCount = 0;
  let regex = /[aeiou]/ig
  vowelsCount = str.match(/[aeiou]/ig)
  return (vowelsCount||[]).length;
}

// Solution 2
const getCount = (str) => (str.match(/[aeiou]/ig)||[]).length;

// Solution 3
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}