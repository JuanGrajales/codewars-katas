// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

//solution 1

function DNAStrand(dna) {
  let returnStr = "";
  for (const char of dna) {
    if (char == "A") {
      returnStr += "T";
    } else if (char == "T") {
      returnStr += "A";
    } else if (char == "C") {
      returnStr += "G";
    } else {
      returnStr += "C";
    }
  }
  return returnStr;
}

// solution 2
function DNAStrand(dna) {
  let compliments = { A: "T", T: "A", G: "C", C: "G" };
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    result += compliments[dna[i]];
  }

  return result;
}

//solution 3
function DNAStrand(dna) {
  let compliments = { A: "T", T: "A", G: "C", C: "G" };

  return dna
    .split("")
    .map((char) => compliments[char])
    .join("");
}
