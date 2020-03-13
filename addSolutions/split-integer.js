// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
var splitInteger = function (num, parts) {
    // solution one
    let additional = num % parts;
    return [
      ...new Array(parts - additional).fill(Math.floor(num / parts)),
      ...new Array(additional).fill(Math.ceil(num / parts)),
    ];
}