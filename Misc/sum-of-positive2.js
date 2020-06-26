// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

  
  // solution 2
  function positiveSum(arr){
    for(var i=0, count=0; i<=arr.length; i++){
      if(arr[i] >= 0){
        count += arr[i]
      }
    }
    return count;
  }