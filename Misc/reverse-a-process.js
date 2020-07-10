// https://www.codewars.com/kata/5dad6e5264e25a001918a1fc
// Challenge: solve with regex
// Methods: Array.from, parseInt, indexOf, reduce, match

// Solution 1
function decode(r) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const all = Array.from(
    { length: 26 },
    (_, i) => ((i + 1) * parseInt(r)) % 26
  );
  if (all.length !== new Set(all).size) return "Impossible to decode";
  return [...r.match(/[a-z]+/i)[0]].reduce(
    (a, v) => (a += alpha[(all.indexOf(alpha.indexOf(v)) + 1) % 26]),
    ""
  );
}

// Solution 2
const startCharASCII = 97;
const letterCount = 26;

function decode(r) {
  var num = parseInt(r);
  var letters = [];
  var codes = [];
  for (var i = 0; i < letterCount; i++) {
    letters[i] = String.fromCharCode(startCharASCII + i);
    codes[i] = String.fromCharCode(((i * num) % letterCount) + startCharASCII);
  }
  if (Array.from(new Set(codes)).length != letterCount)
    return "Impossible to decode";
  return r
    .split(num)[1]
    .split("")
    .map((v, i, a) => letters[codes.indexOf(v)])
    .join("");
}
