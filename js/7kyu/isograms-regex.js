// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Challenge: solve using regex
// Methods: match, Set(not a method), toUpperCase, size, length

// Solution 1
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

// Solution 2
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}