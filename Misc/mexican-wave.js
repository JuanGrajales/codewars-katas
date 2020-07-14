// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// Solution 1
function wave(str) {
  return [...Array(str.length).keys()]
    .map((x) => {
      return (
        str.slice(0, x) + str.slice(x, x + 1).toUpperCase() + str.slice(x + 1)
      );
    })
    .filter((el) => el != str);
}
