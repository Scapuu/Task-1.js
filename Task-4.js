const credits = 23580;
const pricePerDroid = 3000;

let message;

const droidsToBuy = prompt('Скільки дроїдів ви хочете купити?');
if (droidsToBuy === null) {
message = 'Скасовано користувачем!';
} else {
const totalPrice = pricePerDroid * Number(droidsToBuy);
if (totalPrice > credits) {
message = 'Недостатньо коштів на рахунку!';
} else {
const creditsLeft = credits - totalPrice;
message = Ви купили ${droidsToBuy} дроїдів, на рахунку залишилося ${creditsLeft} кредитів.;
}
}

console.log(message);
