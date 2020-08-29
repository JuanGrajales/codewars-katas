// https://www.codewars.com/kata/57ebdf944cde58f973000405/javascript
// Challenge: solve with map
// Methods: 

// Solution 1
function reverser(sentence) {
    let arr = sentence.split(" ").map(el => {
        return el.split('').reverse().join('')
    })
    return arr.join(' ')
}

// Solution 2
const reverser = (sentence) => {
    return sentence
    .split(" ")
    .map(el => el.split('').reverse().join(''))
    .join(' ')
}