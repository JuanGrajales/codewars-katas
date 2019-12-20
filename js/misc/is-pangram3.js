// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
    return [..."abcdefghijklmnopqrstuvwxyz"].every(
      (char) => string.toLowerCase().indexOf(char) !== -1
    );
  }