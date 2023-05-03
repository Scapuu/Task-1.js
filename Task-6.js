let total = 0;
let input;

do {
  input = prompt('Введіть число:');
  if (input === null) {
    break;
  }
  input = Number(input);
  if (isNaN(input)) {
    alert('Було написано не число, спробуйте ще раз.');
    continue;
  }
  total += input;
} while (true);

alert(Загальна сума чисел дорівнює ${total}.);
