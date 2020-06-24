// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
// Challenge: use while loop
// Methods: 

// Solution 1
function solution(number){
    let sum = 0
    number--
    while(number > 2){
      if(number%3 === 0 || number%5 === 0){
         sum += number 
      }
      number--
    }
    return sum
  }