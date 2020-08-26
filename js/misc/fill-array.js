//https://www.codewars.com/kata/571d42206414b103dc0006a1

//Solution 1 with for loop
const arr = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};

//Solution 2 with Array.from
//note: look at tests for including _
const arr = (n) => Array.from({ length: n }, (_, i) => i);

//Solution 3 with Array.keys
//note: spread operator for making new array
const arr = (N) => [...Array(N || 0).keys()];
