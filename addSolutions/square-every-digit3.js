function squareDigits(num){
    let result = num
      .toString()                     // turn number to string
      .split("")                      // turn string into array
      .map( num => parseInt(num) )    // map each index and return a number, now you have a number array
      .map( num => num * num )        // map the number array and return the square of each number
      .join("")                       // turn the number array into a string
     
    return parseInt(result)           // turn the string into a number
  }