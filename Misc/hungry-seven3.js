// https://www.codewars.com/kata/59e61c577905df540000016b/train/javascript

function hungrySeven(arr) { 
    arr = arr.join('');
    while(/789/.test(arr)) {
      arr = arr.replace(/789/g, '897');
    }
    return arr.split('').map(x => x*1);
}
