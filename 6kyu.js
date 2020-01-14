/**
 * Ticker INCOMPLETE
 * https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript
 */
const ticker = (text, width, tick) => {
  // width has empty string   
  if(tick === 0){
    return "".padStart(width, " ");
  }
  // width has partial/complete string with/without padding at the start
  else if(tick <= width){  
    text = text.substring(0, tick);
    return text.padStart(width, " ");
  }
  else if(tick > width){  
    // width has partial string with padding at the end or empty string
    if(tick-width <= text.length){
      text = text.substring(tick-width, text.length);
      return text.padEnd(width, " ");
    }
    // width has empty string
    else if(tick-width > text.length){
      text = text.substring(0, tick-width-text.length);
      return text.padStart(width, " ");
    }
  } 
}


/**
 * Cat and Mouse - Harder Version
 * https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript
 */

function catMouse(x, j){
  let dog = x.indexOf("D");
  let cat = x.indexOf("C");
  let mouse = x.indexOf("m");
  
  if(dog >= 0 && cat >= 0 && mouse >= 0){  
    
    if(mouse > cat && cat+j >= mouse){
    console.log("1")
      if(dog > cat && dog < mouse){
        console.log("Protected!")
        return "Protected!";
      }
      else {
        console.log("Caught!")
        return "Caught!";
      }
    }
    else if(mouse < cat && cat-j <= mouse){
    console.log("2")
      if(dog < cat && dog > mouse){
        console.log("Protected!")
        return "Protected!";
      }
      else {
        console.log("Caught!")
        return "Caught!";
      }
    }
    else if(cat+j < mouse || cat-j > mouse){
      console.log("Escaped!")
      return "Escaped!";
    }
  } 
  else {
    console.log("boring without all three")
    return "boring without all three";
  }
}

/**
 * Christmas tree
 * https://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript 
 */
function christmasTree(height) {
  let justOne = "*"
  let str = "*";
  let arr = [];
  
  let base = (height*2)-1; // base length
  let initial = (base/2)+1;
  
  
  for(let i = 1; i <= height; i++){
    console.log(str.padStart(initial))
    arr.push(str.padStart(initial))
    initial += 1;
    str += justOne;
    str += justOne;
  }
  
  return arr.join('\n')
}