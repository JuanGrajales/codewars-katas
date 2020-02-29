// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// Challenge: solve using sort
// Methods: parseInt, Number, String, toString split, reverse, join

// Solution 1
function descendingOrder(n){
  return Number(String(n).split('').sort().reverse().join(''))
}

// Solution 2
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

// Solution 3
const descendingOrder = (n) => {
  return Number(String(n).split('').sort((a,b) => b - a).join(''))
}