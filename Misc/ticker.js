// https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript

const ticker = (text, width, tick) => {
    text = [...text];
    const spaces = Array.from({ length: width }, (_) => " ");
    text = spaces.concat(text);
    for (let i = 0; i < tick; i++) {
      let ch = text.shift();
      text.push(ch);
    }
    return text.slice(0, width).join("");
  };