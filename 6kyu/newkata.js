// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Challenge:
// Methods: Object.entries, forEach, find

// Solution 1
// every number of the array will be the 
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
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }