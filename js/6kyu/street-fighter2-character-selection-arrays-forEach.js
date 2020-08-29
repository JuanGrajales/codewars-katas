// https://www.codewars.com/kata/5853213063adbd1b9b0000be/javascript
// Challenge: solve with forEach
// Methods: if-else, ternary operator

// Solution 1
function streetFighterSelection(fighters, position, moves) {
  let log = [];
  moves.forEach((move) => {
    console.log();
    if (move === "left") {
      position[1] !== 0 ? position[1]-- : (position[1] = 5);
    } else if (move === "right") {
      position[1] !== 5 ? position[1]++ : (position[1] = 0);
    } else if (move === "up") {
      position[0] === 1 ? position[0]-- : null;
    } else if (move === "down") {
      position[0] === 0 ? position[0]++ : null;
    }
    log.push(fighters[position[0]][position[1]]);
  });
  return log;
}

// Solution 2
const streetFighterSelection = (fighters, [i, j], moves) => {
  return moves.map((move) => {
    if (move === "up") i = Math.max(i - 1, 0);
    if (move === "down") i = Math.min(i + 1, 1);
    if (move === "left") j = (j - 1 + 6) % 6;
    if (move === "right") j = (j + 1 + 6) % 6;

    return fighters[i][j];
  });
};
