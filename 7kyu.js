/**
 * Count the divisors of a number
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
 */
function getDivisorsCnt(n){
  let sum = 0;
  
  for(let i = 1; i <= n; i++){
    if(n % i == 0)
      sum++;
  }
  
  return sum;
}

/**
 * Moves in squared strings (I)
 * https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript 
 */
function vertMirror(strng) {
  //     // Your code
  //     console.log("hi")
  //     let str = strng.split("\\");
  //     console.log(str);
  }
  function horMirror(strng) {
      // Your code
      
  }
  function oper(fct, s) {
      // Your code
      
      // split the string into an array of strings
      let str = s.split("\n");
      let newArr = [];
      
      str.forEach(function(eachStr){
        // split each string in the index to an array of letters, reverse the array, join it back
        // to a string and push it to the new array
        newArr.push(eachStr.split("").reverse().join(""));
      });
      
  //     console.log(`${str.join("\n")}`)
      console.log(`${newArr.join("\n")}`)
      let newnew = newArr.join("\n")
      console.log(newnew)
      return newnew
      
      
  //     if(fct == "vertMirro")
  //       vertMirror(s)
  }