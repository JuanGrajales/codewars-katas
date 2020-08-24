//https://www.codewars.com/kata/558fc85d8fd1938afb000014

//Solution 1 - with sorting in ascending order
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

//Solution 1 - shorthand
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)[0] + numbers[1];
}

//Solution 2 - by Sebastian
function sumTwoSmallestNumbers(numbers) {
  let numbersToAdd = [];
  while (numbersToAdd.length < 2) {
    numbersToAdd.push(
      Number(numbers.splice(numbers.indexOf(Math.min(...numbers)), 1))
    );
  }
  return numbersToAdd[0] + numbersToAdd[1];
}
