 // split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // includes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  // toLowerCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  // join - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  function disemvowel(str) {
    let vowels = "aeiou";
    let strArr = str.split("");   // turn string into array
    let filterArr = strArr.filter(letter => {
      return !vowels.includes(letter.toLowerCase());  // if the letter is not found in vowels then add it to the filterArr
    });
    let newStr = filterArr.join("")
    
    return newStr;
  }