// https://www.codewars.com/kata/52a0849a852a854d050005f4/train/javascript

function Foo(value) {
  this.value = value;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

Foo.prototype.valueOf = function () {
  return this.value;
};

console.log(new Foo(2) + new Foo(3), 5);
console.log(new Foo(-2) + new Foo(3), 1);
console.log(new Foo(-21) + new Foo(-7), -28);
console.log(new Foo(1.5) + new Foo(0.2), 1.7);
