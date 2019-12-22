// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
    //...
      let a = 97;
      let z = 122;
  
      for(let i = a; i <= z; i++) {
        if(!string.toLowerCase().includes(String.fromCharCode(i))) return false;
      }
      return true;
  }