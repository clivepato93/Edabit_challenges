// https://www.codewars.com/kata/524c6a2e55025e3fba00020f/train/javascript
// MyNamespace is provided. Define MyClass ...

var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = class {
  constructor(phrase) {
    this.phrase = phrase;
  }
};

MyNamespace.MyClass.prototype.sayHello = function () {
  return this.phrase;
};
