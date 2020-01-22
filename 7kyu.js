/**
 * Absent vowel
 * https://www.codewars.com/kata/56414fdc6488ee99db00002c/solutions/javascript/all/clever
 */
function absentVowel(x){
  switch(-1)
  {
    case x.split('').indexOf('a'): return 0;
    case x.split('').indexOf('e'): return 1;
    case x.split('').indexOf('i'): return 2;
    case x.split('').indexOf('o'): return 3;
    case x.split('').indexOf('u'): return 4;
  }
}

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
 * Moves in squared strings (I) INCOMPLETE
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
  //     console.log(str);
  //     console.log(`${str}`);
      
      let newArr = [];
      
      str.forEach(function(eachStr){
  //       console.log(eachStr.split("").reverse().join(""));
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

