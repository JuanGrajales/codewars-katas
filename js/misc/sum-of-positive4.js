// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    let sum = 0;
    for(const number in arr){
      if(arr[number] > 0){
        sum += arr[number];
      }
    }
    return sum;
  }