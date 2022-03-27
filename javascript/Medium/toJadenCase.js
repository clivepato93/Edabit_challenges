// https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript/me/best_practice

String.prototype.toJadenCase = function () {
    //...
    return this.split(' ').map(el=> el[0].toUpperCase()+el.slice(1)).join(' ');
  };