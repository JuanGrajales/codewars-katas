// https://www.codewars.com/kata/5709bdd2f088096786000008
// Prereqs: arrays, loops, variables, functions
// Challenge: solve using sort
// Methods: Array.from, sort, join, reverse, split, toString, parseInt

// Solution 1
function superSize(num){
  let arr = Array.from(String(num), Number)
  
  arr.sort((a,b) => {
    return b-a
  })
  
  let bigNum = Number(arr.join(''))
  return bigNum
}

// Solution 2
const superSize = (num) => {
  let bigNum = Array.from(String(num), Number)
    .sort((a,b) => b-a)
    .join('')

  return Number(bigNum)
}

// Solution 3
const superSize = (num) => Number(Array.from(String(num), Number).sort((a,b) => b-a).join(''))

// Solution 4
const superSize = (num) => {
  let bigNum = num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
  return parseInt(bigNum)
}

// Solution 4
const superSize = (num) => parseInt(num.toString().split('').sort((a, b) => b - a).join(''))

// Solution 5
const superSize = (num) => {
  let bigNum = num
    .toString()
    .split('')
    .sort()
    .reverse()
    .join('')
  
  return parseInt(bigNum)
}

// Solution 6
const superSize = (num) => parseInt(num.toString().split('').sort().reverse().join(''))