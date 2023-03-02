// щоб перевірити як все працює відкриваємо html - open in defolt brouther

// Правила підключення джаваскріптів в html файл
// у верхній частині документа зачасту підключаються важливі стилі,
// стайл-шіти, зовнішні елементи які потрібні для роботи. 
// А якісь локальні файли підключаються внизу перед закриваючим тегом боді.


// variables
// var name
// let name = "Ivan" - переприсвоюється напр--> name = "Petro"
// const - не переприсвоюється
// let a = 18;
// let b = 20;

// console.log(a - b); те що виводиться в консолі розробника

// data types типи даних: 
// number числа, 
// string строки, '',"",``
// boolean -> true false 
// null 
// undefinded - за замовчуванням доки не присвоємо дані
// objects обєкти, масиви, можуть містити в собі все

// якщо одній змінній дати значення числа а другій строки то a + b буде 
// значення одне і друге a = "10" b = 20 a + b = 1020; a = "Ivan" b = 20 a + b = Ivan20
// a = "Ivan" b = 20 a - b = Nan - не число
// конкатинація - обєднання строк
// condstions - умови if, 

// let name = "Ivan";
 // let age = "Ivan";
 // let b = 20;
//
// console.log("The user name is: " + name + " he is: " + age + " years old." );

// condstions - умови if, (умова в круг дуж правд) то виконується умова {} 
// якщо не правдиве то виконається else{}
// 

// let age = 20;

// if (age > 18) {
//  console.log("success");
// } else {
//  console.log("failure");
// }

// console.log("")

// function --> обмежений блок коду який можна перевикористовувати,
// він завжди повертатиме одну і ту саму інформацію, якщо передавати ті самі аргументи

// function addNumbers() {
 //   console.log("Function is called");
 // }

// function addNumbers(a, b) {
//    console.log(a + b);
//  }

// addNumbers(10, 20);


 
// функція має два сенси використання
// do something - function addNumbers(a, b) {console.log(a + b);}
// return something - function addNumbers(a, b) {return a + b;}

// function addNumbers(a, b) {
  //  return a + b;
    // }
    
// const calculatedValues = addNumbers(10, 20);
// const calculatedValues1 = addNumbers(1058769, 2067699);


// console.log(calculatedValues);
// console.log(calculatedValues1);

//function addNumbers() {
  //  console.log("a + b");
 // }

// опрацювання подій
const button = document.querySelector("button")
console.log("button");
  button.onclick = setBodyBg;

function setBodyBg() {
   document.body.style.backgroundColor = "green";
}
 // редагування кнопки "Click me" із html 
 // const button = document.querySelector("button");
 // console.log("button");
 // button.onclick = setBodyBg; 
 // при виконанні цієї функції = виконається setBodyBg

 // document.body.style.backgroundColor = "green", "red", "yellow", "pink";


  // const button = document.querySelector("button");
  // console.log("button");
 // button.onclick = setBodyBg; 
 
 // function setBodyBg() {
  //  const array = ["pink", "violet", "green", "red", "blue"];
  // document.body.style.backgroundColor =
  //array[Math.floor(Math.random() * array.length)];
// }
// setInterval(setBodyBg, 1000)

// цикли (loop) говорять якщо всередині круглих дужок буде тру то виконається цей цикл while, for
// while(true) {
// console.log("Loop is running");
// }
// let currentStep = 0;
// while(currentStep < 50 ) {
  // console.log("Loop is running", currentStep);
  //currentStep = currentStep + 1;
  // }
// currentStep = currentStep + 1; спрощений запис currentStep++ (інкремент) який збільшує на 1

// while(currentStep < 50 ) {
//   console.log("Loop is running", currentStep);
 //  currentStep++;
 //  }

 // Якщо певну задачу можна зробити через  Javascript або CSS то як краще робити,
 // динамічне завдання через JS  не динамічне через CSS
// html документ який відображається у вас в браузері CSS правила як цей документ буде виглядати
// якщо можна все написати через   CSS то так краще і писати
// через Javascript ви можете підміняти назви класів, 
// (наприклад можна для нашої кнопки створити якийсь клас напри <button class='btn'>Click me</button> ) Javascript її підмінити на якийсь праймарі чи типу того
// Javascript мова створена для веб додатків html сторінок і вона може підмінити будь який елеммент,
// ви можете видалити всі класи і додати нові,можна додати ідентифікат для якогось елемента, змінити стилі документа, при натисканні на цю кнопку можна змінити стиль якогось іншого документа


// let maxValue = 50;
// for (let i = 0; i < maxValue; i++) {
//  console.log("Loop is running", i)
// }
// цикл for дозволяє багато працювати із числами і строками, створити і накопичувати якесь початкове значення і збільшувати його

// наприклад не парні значення вивести
// for (let i = 1; i < maxValue; i = i + 2) {
 // console.log("Loop is running", i);
// }
 
// наприклад парні значення вивести
// for (let i = 0; i < maxValue; i = i + 2) {
 // console.log("Loop is running", i);
// }
// Jaascript про те як навчитися писати і бачити ті алгоритми для того щоб вирішити покладену в умову задачу

// const text = "Hello, my name is JS";
// всі цикли починаються з 0 тому парні чи не пврні значення строки можна вивести
// наприклад в консолі ми можемо написати let a = "drhfjerdfnjnjjajfedbv"
// undefined
// якщо ми після цього напишемо a. то нам випаде вікно з властивостями які можна обрати
// a.length виведе кількість символів
// парні букви
const text = "Hello, my name is JS";
 // for (let i = 0; i < text.length; i = i + 2) {
  //  console.log(text[i]);
  // }
//не парні букви
  // for (let i = 1; i < text.length; i = i + 2) {
   // console.log(text[i]);
   // }

   // парні значення в одній строці
  // let result = ""; 
  // for (let i = 1; i < text.length; i = i + 2) {
   // result = result + text[i];
   // }
// console.log(result);


// якщо треба і не парні і парні %дозволяє подивитись парність чи не парність елемента

// let result = "";
// let result1 = "";


// якщо дія в () тру то перші {} як ні то другі {}
// for (let i = 0; i < text.length; i++) {
//   if ( i % 2 === 0) {
// result = result + text[i];
//   } else {
//     result1 = result1 + text[i];
//   }
// }
// console.log("Result one is ", result);
// console.log("Result two is ", result1);

// 3 % 2 = 1 остача від ділення найбільшого числа 27 % 17 = 10    36 % 17 = 2
// === перевіряє чи дорівнює вираз 0 фбо тру
// наприклад використовується з датами в календарях

// частина html
// <button class="btn">Click me</button>
// <input type="text" />

// JS-core база ввивчити Javascript.info
// база це вміння працювати з циклами, написати якісь функції, база це вмінняпрацювати зі змінними
// це розуміння типів які є строки,числа,булеві значення тру\фолс, як вони працюють і як з нимим працювати

// кожен із певних типів даних має свої медоти
// const name = "Ivan"
// name.indexOf("Y")
// -1  якщо вона є то цей метод поверне її індекс значення якщо нема -1
// name.indexOf("a") її індекс починається з 0 тому 3
// name.toUpperCase - підведе до великих літер
// "       dfudughuejhgj      ".trim обріже пропуски
//  replace - замінити якусь літеру чи вирізати
//  code-wars - сервіс для тренування завдань

// const names = [
//   "John" 
//   "Sam" 
//   "Sam" 
//   "Sam" 
//   "Sam" 
//   "Sam" 
//   "Petter" 
//   "Petter"
//   "Petter"
//   "Bob"
//   "Bob"
//   "Bob"
//   "Bob"
//   "Bob"
//   "Bob"
//   "Bob"
//   "Bob"
// ];


// write function повинна відформатувати тільки унікальні імена і написати в порядку зменьшення частоти їх повторення



// function getUnique(arr) {
// return [];
// }

// palindrom - число яке читається з права на ліво як з ліва на право
// через масив чи цикл



// функція яка буде рандомно міняти колір баді кожну секунду
// function setBodyBg() {
//   const array = ["pink", "violet", "green", "red", "blue"];
//   document.body.style.backgroundColor =
//   array[Math.floor(Math.random() * array.length)];
// }
//   setInterval(setBodyBg, 1000)


//                               lesson 2   