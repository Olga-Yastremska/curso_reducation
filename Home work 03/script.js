
//Виводить найбільшу цифру з будь якого введеного цілого числа "1"
function getMaxDigit(number) {
    let maxDigit = 0;
    while (number > 0) {
      const currentNum = number % 10;
      if (currentNum > maxDigit) {
        maxDigit = currentNum;
      }
      number = Math.floor(number / 10);
    }
    return maxDigit;
}
console.log(getMaxDigit(5674));

//Функція яка визначає ступінь числа "2"
function brinToDegree(num, degree) {
    let result = 1;
    for(let i = 1; i <= degree; i++){
        result *= num;
    }
    console.log(result);
}
brinToDegree(6,2);
 
//Створити функцію, яка робить першу букву великою "3"
function nameSwitch(Name = "madRiD"){
    const firstLetter = Name.charAt(0);
    const leftLetters = Name.slice(1).toLowerCase();
    const firstBigLetter = firstLetter.toUpperCase();
    const changedWord = firstBigLetter + leftLetters;
    return changedWord;
}
console.log(nameSwitch("madRiD"));

//Сума доходу після податку "4"
function beginingSalary(salary, percent) {
    let tax = salary / 100 * percent;
    let salaryAfterTaxes = salary - tax;
    return salaryAfterTaxes;
   }
   let resultSalary = beginingSalary(900, 19.5);
   console.log(resultSalary);

//Кількість повторів літер в слові "6"
function characterCounter(letter, word){
    let counter = 0; 
    for (let i = 0; i < word.length; i++){
        if (letter.toUpperCase() === word.charAt(i).toUpperCase()){ 
            counter++;
        }
    }
    return counter;
}
console.log(characterCounter("i", "Infinity"));

//Генерація випадкового паролю (тільки числа) "9"
function passwordRandom (quantity) {
    let randomPass = ""
    for (i = 1; i <= quantity; i++) {
        randomPass = randomPass + String(Math.floor(Math.random() * 10))
    }
    return randomPass;
}
let result = passwordRandom(8);
console.log(result);

//Функцію, яка видаляє літери "10"
const deleteLetters = function (letter, word) { 
    let changedword = word.replaceAll(letter, "")
    return changedword;
    }
    console.log(deleteLetters('a', "blablabla"));
    







