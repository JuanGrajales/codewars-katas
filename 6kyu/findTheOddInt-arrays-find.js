// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Challenge: solve with find and filter
// Methods: Object.entries, forEach, find

// Solution 1
// every element of the array becomes the key of the object if the key is a duplicate then it increases the value of the existing key by 1. Then make an array which each element being an array with two element (object key and object value). Then find which key has the odd value.
function findOdd(arr) {
    let countObj = {}
    arr.forEach(num => {
        if(!countObj[`${num}`]){
        countObj[`${num}`] = 1
        } else {
        countObj[`${num}`]++
        }
    })
    let arr2 = Object.entries(countObj)
    let odd = arr2.find(num => num[1] % 2 !== 0)
    return Number(odd[0]);
}

// Solution 2
// each loop in the find will find the total number of times that the number in the array appears if it finds it an even number of time find it will return 0 (i.e. false) if it finds it an odd number of times then it will return 1 (i.e. true)
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

// Solution 3
// ^ is XOR so if you perform anyNumber ^ sameNumber you will always get zero, so if you have a number that shows up an even amount of times then you will get zero and only the number that shows up an odd amount of times will be left
function findOdd(arr) {
    return arr.reduce((acc, curr) => {
    return acc^curr
    },0);
  }