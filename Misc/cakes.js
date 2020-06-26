// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let ans = Infinity;
    for (let key in recipe) {
      if (available[key]) {
        if (ans > available[key] / recipe[key]) {
          ans = Math.floor(available[key] / recipe[key]);
        }
      } else {
        ans = 0;
        break;
      }
    }
    return ans;
  
  }