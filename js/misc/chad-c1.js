// Given: array (a), length (n)
// Return: new array (b) where every b[i] = a[i-1] + a[i] + a[i+1]

let a = [4, 0, 1, -2, 3];

function mutateTheArray(n, arr) {
  let b = [];

  arr.forEach((num, i) => {
    let num1, num2;

    arr[i - 1] ? (num1 = arr[i - 1]) : (num1 = 0);
    arr[i + 1] ? (num2 = arr[i + 1]) : (num2 = 0);

    b.push(num1 + arr[i] + num2);
  });

  return b;
}

console.log(mutateTheArray(a.length, a));

// Tiny pairs

let a = [1, 2, 3];
let b = [1, 2, 3];
let k = 31;

function countTinyPairs(arr, brr, int) {
  let j = arr.length - 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(String(arr[i]) + String(brr[j])) < int) count++;
    j--;
  }
  return count;
}

console.log(countTinyPairs(a, b, k));

// mean values
let arrs = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];

let obj = {};
arrs.forEach((eachArr, index) => {
  let mean = eachArr.reduce((accum, curr) => accum + curr) / eachArr.length;
  console.log(mean);
  if (obj[mean]) obj[mean].push(index);
  else obj[mean] = [index];
});

console.log(obj);

let arrs2 = Object.values(obj);

console.log(arrs2);

// query question

function insert(x, y) {
  console.log(x, y);
}

function get(x) {}

function addToKey(x) {}

function addToValue(y) {}

let queryType = ["get", "insert"];

let query = [[0], [1, "one"]];

insert(queryType, query);
