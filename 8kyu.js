/**
 * Even or Odd 
 * https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 */
function even_or_odd(number) {
  if(number % 2 === 0)
  return "Even"
  else
  return "Odd"
}

/**
 * Sum of Positive 
 * https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
 */
function positiveSum(arr) {
  let sum = 0;
  arr.forEach(num => {
    console.log(num)
    if(num > 0)
      {sum = sum + num;}
  })
  
  return sum;
}

/**
 * Count the divisors of a number
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
 */
function getDivisorsCnt(n){
  
}