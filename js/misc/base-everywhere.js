// https://www.codewars.com/kata/5f47e79e18330d001a195b55

// solution 1

function baseFinder(seq) {
  seq = seq.join("").split("");

  let result = [];

  for (let i = 0; i < seq.length; i++) {
    if (!result.includes(seq[i])) result.push(seq[i]);
  }
  return result.length;
}

// solution 2

function baseFinder(seq) {
  seq = seq.join("").split("");

  return seq.filter((elt, i, seq) => {
    return !seq.slice(i + 1).includes(elt);
  }).length;
}

// solution 3

function baseFinder(seq) {
  return new Set(seq.join``).size;
}
