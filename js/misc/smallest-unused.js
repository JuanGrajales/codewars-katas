//https://www.codewars.com/kata/55eea63119278d571d00006a

//Solution 1 - with for loop && indexOf
function nextId(ids) {
  for (i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) === -1) {
      return i;
    }
  }
  return ids.length;
}

//Solution 2 - by Rabiul
function nextId(ids) {
  let unusedID = 0;
  while (ids.includes(unusedID)) {
    unusedID++;
  }
  return unusedID;
}
