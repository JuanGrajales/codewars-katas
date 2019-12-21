// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
      let regex = /[^a-z]+/gi;
      const worth = string.toLowerCase().replace(regex, '');
      const itsMatched = new Set(Array.from(worth)).size;
      return itsMatched === 26;
  }