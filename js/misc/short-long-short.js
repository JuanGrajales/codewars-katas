//https://www.codewars.com/kata/55eea63119278d571d00006a

//solution 1
function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else if (b.length > a.length) {
    return a + b + a;
  }
}

//solution 1 shorthand
const solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b);
