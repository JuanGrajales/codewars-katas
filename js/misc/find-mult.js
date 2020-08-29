//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript

//Solution 1 with for loop
function findMultiples(integer, limit) {
  let result = [];

  for (let i = integer; i <= limit; i += integer) result.push(i);

  return result;
}

//Using while loop
const findMultiples = (integer, limit) => {
  let max = 0,
    arr = [];
  while (max + integer <= limit) {
    max += integer;
    arr.push(max);
  }
  return arr;
};
