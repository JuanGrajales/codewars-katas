// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
function moreZeros(s) {
    let array = s.split("");
    let newArray = array.map((char) => {
      return char.charCodeAt(0).toString(2);
    });
    let solution = [];
    for (let i = 0; i < newArray.length; i++) {
      let zeroCount = 0;
      let oneCount = 0;
      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] == 0) {
          zeroCount++;
        } else {
          oneCount++;
        }
      }
      if (oneCount < zeroCount) {
        solution.push(s[i]);
      }
    }
    return [...new Set(solution)];
  }