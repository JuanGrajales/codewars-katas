// https://www.codewars.com/kata/5a1dc4baffe75f270200006b
function onlyDuplicates(str) {
    // your code here
  
    aaaccccabc; // 0 8 - a
    //  0 !== 8 -> true
    // 9 !== 9 -> false
    return str
      .split("")
      .filter((e) => str.indexOf(e) !== str.lastIndexOf(e))
      .join("");
  }