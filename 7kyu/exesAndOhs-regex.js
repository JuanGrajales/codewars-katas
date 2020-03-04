// https://www.codewars.com/kata/55908aad6620c066bc00002a
// Challenge: solve using regex
// Methods: match, length, replace, toLowerCase, split, filter

// Solution 1
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// Solution 2
function XO(str) {
  return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
}

// Solution 3
function XO(str) {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// Solution 4
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}