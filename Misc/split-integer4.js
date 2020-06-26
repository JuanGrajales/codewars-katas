// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript


var splitInteger = function (num, parts) {
    // soltution four
      var array = [];
      for (var i = 0; i < parts; ++i)
        array[i] = Math.floor(num / parts) + (i < num % parts);
      return array;
  };