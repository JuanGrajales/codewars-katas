// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
function moreZeros(s) {
    return [...new Set([...s].filter((letter) => {
        let binary = letter.charCodeAt().toString(2);
        let numberOfZeroes = binary.replace(/1/g,'').length;  //.filter(num => num*1 === 0).length;
        let numberOfOnes = binary.replace(/0/g,'').length;  //.filter(num => num*1 === 1).length;
        return numberOfZeroes > numberOfOnes;
      }))]
    }