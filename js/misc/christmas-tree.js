function christmasTree(height) {
    //   let xmasT = '';
    //   for(let i = 0; i<height; i++) {
    //     for(let j = 0; j < (height -i -1); j++) {
    //       xmasT+= " ";
    //     }
    //     for(let k = 0; k < (2*i+1); k++) {
    //       xmasT+="*";
    //     }
    //     for(let r = 0; r < (height -i -1); r++) {
    //       xmasT+= " ";
    //     }
    //     if(i !== height-1) {
    //       xmasT += '\n';
    //     }
    //   }
    //   return xmasT;
    return [...new Array(height).keys()]
      .map((row, i) => row + i + 1)
      .reverse()
      .map((row, i) => " ".repeat(i) + "*".repeat(row) + " ".repeat(i))
      .reverse()
      .join("\n");
  }