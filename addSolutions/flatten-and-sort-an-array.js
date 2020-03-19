// 7kyu - Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

//soltion1
"use strict";
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((acc, value) => {
    return acc
      .concat(Array.isArray(value) ? flattenAndSort(value) : value)
      .sort((a, b) => a - b);
  }, []);
}