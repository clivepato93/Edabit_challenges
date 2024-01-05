// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (init) {
  const original = init;
  return {
    increment: () => (init += 1),
    decrement: () => (init -= 1),
    reset: () => (init = original),
  };
};

const counter = createCounter(5);
counter.increment(); // 6
console.log(counter.init);
counter.reset(); // 5
console.log(counter);

counter.decrement(); // 4
console.log(counter);
