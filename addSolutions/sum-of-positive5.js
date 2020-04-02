// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

  // filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
  // reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // reduce - https://alligator.io/js/finally-understand-reduce/  
  function positiveSum(arr){
  return arr
        .filter(positivenumbers => positivenumbers > 0)
        .reduce((a,b) => a + b, 0);
  }
  