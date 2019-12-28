// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
function letterCount(s) {
    return [...s].reduce(
      (acc, val) => (acc[val] ? acc[val]++ : (acc[val] = 1), acc),
      {}
    );
  }