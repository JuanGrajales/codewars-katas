// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript


var splitInteger = function (num, parts) {

    // solution two:
      let base = Math.floor(num/parts);
      let answer = [];
      // let additional = num - (parts*base);
      let additional = num % parts;
      for(let i = 0; i < parts; i++) {
        answer[i]=base;
      }
      for(let i = 1; i <= additional; i++) {
        answer[parts-i]+=1;
      }
      return answer
}