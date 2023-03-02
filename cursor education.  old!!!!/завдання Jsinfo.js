  /*                      завдання
Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.
“Включно” означає, що age може досягати країв 14 або 90.
if (age >= 14 && age <= 90)

Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
Створіть два варіанти: перший з оператором НЕ !, другий — без нього.
if (age < 14) || (age > 90)
if (!(age >= 14 && age <= 90))

Які з цих alert буде виконано?
Якими будуть результати виразів у if(...)?
// Виконається.
// Результат -1 || 0 = -1, правдивий         або
if (-1 || 0) alert( 'перший' );

// Не виконається
// -1 && 0 = 0, хибний                        і
if (-1 && 0) alert( 'другий' );

// Виконається
// Оператор && має більший пріоритет, ніж ||
// тому -1 && 1 виконається першим, даючи нам послідовність:
// null || -1 && 1  ->  null || 1  ->  1          і-або
if (null || -1 && 1) alert( 'третій' );

Напишіть код, який запитує логін за допомогою prompt.
Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.
Пароль перевіряється наступним чином:
Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
Інший рядок – покажіть “Неправильний пароль”,
Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.

let userName = prompt('Хто там?', '');
  if (userName === 'Admin') {
  let pass = prompt('Пароль?', '');
  }
      if (pass === 'Господар') {
      alert( 'Ласкаво просимо!' );
    } else if (pass === '' || pass === null) {
      alert( 'Скасовано' );
    } else {
      alert( 'Неправильний пароль' );
    }
   else if (userName === '' || userName === null) {
    alert( 'Скасовано' );
  } else {
    alert( 'Я вас не знаю' );
  }
  */

// Який буде результат виконання скрипта?

// let name = "Ілля";
// alert( `привіт ${1}` ); // Привіт 1
// alert( `привіт ${"name"}` ); // Привіт name
// alert( `привіт ${name}` ); // Привіт Ілля

/*
Створіть вебсторінку, яка запитує ім’я та виводить його.
<!DOCTYPE HTML>

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
 </head>
<body>
    <script>
        'use strict';
        let name = prompt("Вкажіть ваше ім'я?", "");
        alert(`Ваше ім'я ${name} `);
      </script>
<button>Click me</button>

</body>
</html>
*/

/*
Які кінцеві значення всіх змінних a, b, c та d після виконання коду нижче?

let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

Які значення мають a та x після виконання коду нижче?

let a = 2;
let x = 1 + (a *= 2);
a 4
x 5

Які результати цих виразів?
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
 1. Додавання пустого рядка "" до 1 перетворює число 1 на рядок: "" + 1 = "1"; далі ми маємо "1" + 0, де застосовується те ж саме правило.
2. Віднімання - (як і більшість математичних операцій) працює тільки з числами, воно перетворює порожній рядок "" на 0.
3. Додавання з рядком додає число 5 до рядка.
4. Віднімання завжди перетворює на числа, тому рядок " -9 " перетвориться на число -9 (ігноруючи пробіли навколо нього).
5. null стає 0 після числового перетворення.
6. undefined стає NaN після числового перетворення.
7. Символи пробілів по краях рядка ігноруються під час перетворення в число. Тому рядок, який містить лише символи \t, \n або «звичайні» пробіли, прирівнюється до пустого рядка і стає 0 після числового перетворення.

Нижче наведено код, що просить користувача ввести два числа і відображає їхню суму.
Він працює неправильно. Код у прикладі виводить 12 (для початкових значень у полях вводу).
У чому помилка? Виправте її. Результат має бути 3.

let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);
alert(a + b); // 12

Причина в тому, що вікно запиту повертає ввід користувача як рядок.
Отже змінні отримують значення "1" і "2" відповідно.

let a = "1"; // prompt("Перше число?", 1);
let b = "2"; // prompt("Друге число?", 2);
alert(a + b); // 12
Нам треба перетворити рядки на числа перед застосуванням оператора +. Наприклад, за допомогою Number() або вставлення + перед ними.
Вставити + можна безпосередньо перед prompt:

let a = +prompt("Перше число?", 1);
let b = +prompt("Друге число?", 2);
alert(a + b); // 3
Або всередині alert:
let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);
alert(+a + +b); // 3


 */