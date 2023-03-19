// 1 Масив випадкових цілих чисел
function getRandomArray (length, min, max) {
    const newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * (max - min) + min));
    }
    return newArray;
};
const getArray = getRandomArray(10, -10, 100);
console.log("Масив радномних чисел: " + getArray);


const DigitsFromMinMax = getArray.sort((a, b) => a - b);
console.log("Числа від мін до макс: " + DigitsFromMinMax);



 // 3 середнє арифметичне всіх чисел
function getAverage(array) {
  
	const int = array.filter((DigitsFromMinMax, index) => Number.isInteger(DigitsFromMinMax));
	const sumInt = int.reduce((prevValue, item) => prevValue + item, 0);
   return (sumInt / int.length).toFixed(3);
}
console.log("Cереднє арифметичне всіх чисел: " + getAverage(DigitsFromMinMax));



// 5 Фільтрує парні числа
function filterEvenNumbers(array){
    const evenArray = array.filter((item) => {
        return (item + 2) % 2 === 0
    })
    return evenArray;
}

console.log("Фільтр парних чисел: " + filterEvenNumbers(getArray));

// 6 Скільки чисел більше 0
function countPositiveNumbers(numbers){
    const amountDigits  = numbers.filter((number) => {return number > 0})
    return amountDigits.length
}
console.log("Скільки чисел більше 0: " + countPositiveNumbers(getArray));


// 7 Числа які діляться на 5
function getDividedByFiveFilter(array) {
	const int = array.filter((item) => item % 5 === 0);
	return int;
}
console.log("Числа які діляться на 5: " + getDividedByFiveFilter(getArray));

// 8  Розіб'є фразу на слова
const badWords = ['shit', 'fuck'];

function replaceBadWords(string, words) {
    const wordsSeparated = string.split(' ');
    let wordsJoin = wordsSeparated.join(' ');
    for (i = 0; i < words.length; i++) {
        if (words[i] === words[i]) {
            
phrase = wordsJoin.replace(words[i], '****').split(' ')
            wordsJoin = 
phrase.join(' ')
        }
    }
    return wordsJoin
};
console.log("Погані слова: " + badWords);
console.log(replaceBadWords("Are you fucking kidding bullshit?", badWords));
console.log(replaceBadWords("Holly shit!", badWords));
console.log(replaceBadWords("It's bullshit!", badWords));

console.log(replaceBadWords("Matha fucka!", badWords));





