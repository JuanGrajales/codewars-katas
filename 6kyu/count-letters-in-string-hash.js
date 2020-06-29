// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/javascript
// Challenge: solve with forEach
// Methods: 

// Solution 1
function letterCount(s){
    //your code here
    let obj = {}
    s.split('').forEach(letter => obj[letter]? obj[letter]++ : obj[letter] = 1)
    return obj
}

// Solution 2
const letterCount = s => s
    .split('')
    .reduce((accum, letter) => {
    accum[letter] ? accum[letter]++ : accum[letter] = 1
    return accum
  }, {})