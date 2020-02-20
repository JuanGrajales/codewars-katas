// https://www.codewars.com/kata/546e2562b03326a88e000020
// Challenge: solve using regex
// Methods: indexOf, charAt, toLowerCase, split, filter, join, replace

// Solution 1
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  
  for (let i = 0; i <= str.length; i++) { // interate through the string
    if (vowels.indexOf(str.charAt(i).toLowerCase()) == -1)  // check if the current character exist in the vowels array
      newStr += str.charAt(i);       // if it doesn't exist then add it to the new string
  }
  return newStr;
}

// Solution 2
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter((el) => {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

// Solution 3
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}
