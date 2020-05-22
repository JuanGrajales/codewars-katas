// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
// Challenge: solve using regex
// Methods: replace, match

// Solution 1
function lowercaseCount(str){
  let regex= /[!-`{-~]|€|£/g
  return str.replace(regex, '').length
}

// Solution 2
const lowercaseCount = (str) => str.replace(/[!-`{-~]|€|£/g, '').length

// Solution 3
function lowercaseCount(str){
  let regex= /[a-z]/g
  // if the string doesn't contain any letters within a-b then it will return a null value
  // refer to the truth tables, using OR we can say that if we get a null value use empty string instead
  // if you don't use the OR you will get an error because you cannot get the length of null
  // truth tables - https://www.cs.utah.edu/~germain/PPS/Topics/truth_tables_and_logic.html
  return (str.match(regex) || '').length
}

// Solution 4
const lowercaseCount = (str) => (str.match(/[a-z]/g, '') || '').length