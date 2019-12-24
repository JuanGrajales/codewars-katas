// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
function letterCount(s) {
    //your code here
      let hash = {};
      for(let i = 0; i < s.length; i++) {
        if(hash[s[i]]) {
          hash[s[i]]++;
        } else {
          hash[s[i]] = 1;
        }
      }
      return hash;
      let obj = {};
      s.split('').forEach(el => {
        obj[el]? obj[el]++ : obj[el]=1;
      });
      return obj;

  }