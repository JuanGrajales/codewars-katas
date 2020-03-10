// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript


var splitInteger = function (num, parts) {

      let answer = [];
      let numOne = Math.floor(num/parts);
      let amountOfTimeOne = parts-(num%numOne);
      let amountOfTimeTwo = parts-amountOfTimeOne;
      let numTwo = (num - (numOne*amountOfTimeOne)) / amountOfTimeTwo;
      while(answer.length < amountOfTimeOne) {
        answer.push(numOne);
      }
      while(answer.length < parts) {
        answer.push(numTwo);
      }
      return answer;
  
  };