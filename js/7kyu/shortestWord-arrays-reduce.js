// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// Challenge: solve using reduce
// Methods: split, map, Math.min, Infinity, sort, pop, length, spread operator

// Solution 1
function findShort(s){
  let arr = s.split(' ');
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}

// Solution 2
function findShort(s) {
  return s.split(' ').reduce((min, word) => {
    return Math.min(min, word.length)
  }, Infinity)
}

// Solution 3
function findShort(s) {
  return s.split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
}

// Solution 5
function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}