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
    if(num > 0)
      {sum = sum + num;}
  })
  
  return sum;
}

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

/**
 * Squash the bugs
 * https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
 */
function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}

/**
 * You Can't Code Under Pressure #1
 * https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
 */
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}