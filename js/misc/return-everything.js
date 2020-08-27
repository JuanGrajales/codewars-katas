//https://www.codewars.com/kata/566044325f8fddc1c000002c

//Solution 1
function evenChars(string) {
  console.log(string);
  if (string.length <= 1 || string.length >= 100) {
    return "invalid string";
  }
  let result = [];
  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i]);
  }
  return result;
}

//Solution 2
function evenChars(string) {
  if (2 > string.length || string.length > 100) return "invalid string";
  return string.split("").filter(function (x, i) {
    return i % 2 != 0;
  });
}

//Solution 2 shorthand
function evenChars(string) {
  return string.length < 2 || string.length > 100
    ? "invalid string"
    : string.split("").filter((x, i) => i % 2 != 0);
}
