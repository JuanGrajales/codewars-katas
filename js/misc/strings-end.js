// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// solution 1
function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

// solution 2
function solution(str, ending) {
  return str.endsWith(ending);
}
