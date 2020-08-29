// parseInt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
// split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
// map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
function squareDigits(num){
    let array = num.toString().split('').map( function(int) {   // turn number to string then make string to array then use map to return the square of each number
      let i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join("")); // turn the array into a string and then a number
  }
  