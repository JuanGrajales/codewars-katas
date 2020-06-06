// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Challenge: solve using map
// Methods: split, charAt, toUpperCase, slice, toUpperCase, join, replace, regex

// Solution 1
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

// Solution 2
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

// Solution 3
String.prototype.toJadenCase = function () {
  var words = this.split(' ');

  for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
};