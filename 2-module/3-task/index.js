let calculator = {
  read (a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
// calculator.read(1, 0)
// console.log(calculator.sum())
// console.log(calculator.mul())
// console.log(calculator.a)
// console.log(calculator.b)
