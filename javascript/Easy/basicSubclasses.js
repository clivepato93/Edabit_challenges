// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
    return [new Man(), new Woman()];
  }
}
// code
