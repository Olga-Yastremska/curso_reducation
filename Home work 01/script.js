
const applePrice = 15.678;
const melonPrice = 123.965;
const orangePrice = 90.2345;

console.log("Яблуко : " + applePrice);
console.log("Диня : " + melonPrice);
console.log("Апельсин : " + orangePrice);

const totalPrice = applePrice + melonPrice + orangePrice;

const maxPrice = Math.max(applePrice, melonPrice, orangePrice);
console. log ("Максимальна ціна : " + (Math.max(applePrice, melonPrice, orangePrice)));
const minPrice = Math.min(applePrice, melonPrice, orangePrice);
console. log ("Мінімальна ціна : " + (Math.min(applePrice, melonPrice, orangePrice)));
console. log ("Загальна вартість :" + totalPrice);


console. log ("Вартість без копійок Яблука : " + (Math.floor(applePrice)));
console. log ("Вартість без копійок Диня : " + (Math.floor(melonPrice)));
console. log ("Вартість без копійок Апельсин : " +(Math.floor(orangePrice)));


const applePriceWihoutCoins = Math.floor(applePrice);
const melonPriceWihoutCoins = Math.floor(melonPrice);
const orangePriceWihoutCoins = Math.floor(orangePrice);

const totalPriceWihoutCoins = applePriceWihoutCoins + melonPriceWihoutCoins + orangePriceWihoutCoins;
console. log ("Загальна вартість без копійок : " + totalPriceWihoutCoins);

const totalHundredRoundedPrice = Math.round (totalPriceWihoutCoins / 100) * 100;
console.log("Загальна вартість з округленням до сотень : " + totalHundredRoundedPrice);

console.log("Загальна вартість всіх товарів  - " + Math.floor(totalPriceWihoutCoins) + " є парне число : " +!Boolean(Math.floor(totalPriceWihoutCoins) % 2));

let sumOfPayment = 500;
const restOfPayment = sumOfPayment - totalPrice;
console.log("Сума решти при оплаті 500 грн : " + restOfPayment);

const averageValue = ((totalPrice / 3) * 100) / 100;
console.log("Середнє значення ціни без округленням до 2-х знаків : " + averageValue);

console.log("Середнє значення ціни з округленням до 2-х знаків : " + averageValue.toFixed(2));

const discount = Math.round(Math.random()*99); // знижка від 0 до 99
console.log(`Випадкова знижка: ${discount}%`);


const specialDiscountPrice = ((totalPrice) - (discount/100*100)).toFixed(2);

console.log(`Прибуток: ${(((totalPrice)/2)-(specialDiscountPrice)).toFixed(2)}`);


//Advanced
console.log("Всі обчислення : Максимальна ціна : " + maxPrice + ", Мінімальна ціна : " + minPrice + 
", Загальна вартість :" + totalPrice + ", Загальна вартість товарів (усіх) без копійок : " + totalPriceWihoutCoins + 
", Загальна вартість з округленням до сотень : " + totalHundredRoundedPrice + 
", Сума решти при оплаті 500 грн : " + restOfPayment + ", Середнє значення ціни без округленням до 2-х знаків : " + averageValue + 
", Середнє значення ціни з округленням до 2-х знаків : " + averageValue.toFixed(2) + `, Випадкова знижка: ${discount}%` +
 ', Ціна зі знижкою: ' + specialDiscountPrice + `Прибуток: ${(((totalPrice)/2)-(specialDiscountPrice)).toFixed(2)}`);