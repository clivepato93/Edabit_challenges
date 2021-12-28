// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

const Person = function(first,Last) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    const name = firstAndLast.split(' ')
    this.getFullName = function() {
      return `${firstAndLast}`;
    };

    this.setFullName = function(input) {
        // Insert your code here
      };
  
    this.getFirstName = function() {
      return `${name[0]}`;
    };
  
    this.getLastName = function() {
      return `${name[name.length-1]}`;
    };
    return firstAndLast;
  };
  
  const bob = new Person('Bob','Ross');
  bob.getFullName();