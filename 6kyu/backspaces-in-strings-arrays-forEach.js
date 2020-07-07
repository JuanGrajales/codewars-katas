// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/javascript
// Challenge: solve using forEach
// Methods: pop, push, forEach,

// Solution 1
function cleanString(s) {
  let arr = [];
  [...s].forEach((el) => (el === "#" ? arr.pop() : arr.push(el)));
  return arr.join("");
}

// Solution 2
clean_string = (s) =>
  s.split("").reduce((r, e) => (e == "#" ? r.slice(0, -1) : r + e), "");
