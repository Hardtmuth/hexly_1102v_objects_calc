var readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = readlineSync.questionInt('Write left operand number: ');
    this.b = readlineSync.questionInt('Write right operand number: ');
    return this;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}

console.log(calculator.read().sum());
console.log(calculator.mul());
