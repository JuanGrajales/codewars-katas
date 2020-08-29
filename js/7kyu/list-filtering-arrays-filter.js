// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// Challenge: solve with filter
// Methods:

// Solution 1
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => typeof el === "number" && !isNaN(el));
}

// Solution 2
function filter_list(l) {
  let res = [];
  for (let item = 0; item < l.length; item++) {
    typeof l[item] === "number" ? res.push(l[item]) : null;
  }
  return res;
}
