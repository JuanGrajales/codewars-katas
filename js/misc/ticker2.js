// https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript

const ticker = (text, width, tick) => {
      const space = ' '.repeat(width);
      const setText = space + text + space;
      tick = tick % (setText.length-width);
      const result = setText.substring(tick, tick+width);
      return result;
  };
  