let N = +prompt('Введіть число ');
console.log("перше число N: " + N);
if (N % 1 == 0) { //перевірка чи ціле число
}
else {
console.log("Не ціле число");
}
/* console.log(typeof N); */
let M = +prompt('Введіть число ');
console.log("друге число M: " + M);
if (M % 1 == 0) { //перевірка чи ціле число
}
else {
console.log("Не ціле число");
}
/* console.log(typeof M); */
for (let i = N; i <= M; i++) {
/*   console.log(i); */
   if (i % 2 == 0) {
   // console.log("true ");  //Парні числа потрібно пропускати Тру
  } else {
 // console.log("False ");  //Не парні числа потрібно пропускати Фолс
} 
}
const result = confirm("Чи потрібно пропускати парні числа?") // true - так false - ні


console.log(result);


let sum = 0;
for (let i = N; i <= M; i+=2) {
  if (result == true) {
  sum += i;
  } // виводить суму непарних чисел
else  { 

} // виводить суму усіх чисел
// console.log(sum);
}

console.log(sum);













// for (let i = 0; i <= n; i++){
//     sum += i;
//     }



