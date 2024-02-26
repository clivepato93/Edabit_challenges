// https://www.codewars.com/kata/55aeee88ecebc5c9230000a0/train/javascript

// useful
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

let counter = {
  [Symbol.iterator]() {
    let curr = 0;
    return {
      next() {
        curr++;

        return { done: false, value: curr };
      },
    };
  },
};
