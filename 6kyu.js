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