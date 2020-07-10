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
