// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

  // ternary operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator  
  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
  }