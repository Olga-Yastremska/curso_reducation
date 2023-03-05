
let N = +prompt('Введіть число ');
console.log("перше число N: " + N);
if (N % 1 == 0) { //перевірка чи ціле число
}
else {
console.log("Не ціле число");
}

let M = +prompt('Введіть число ');
console.log("друге число M: " + M);
if (M % 1 == 0) { //перевірка чи ціле число
}
else {
console.log("Не ціле число");
}
const all = confirm("Чи потрібно пропускати парні числа?") // true - так, false - ні
console.log('пропускати парні числа ' + all);

let sum = 0;

for (let i = N; i <= M; i++) {
   if (i % 2 == 0) {//Парні числа потрібно перевіряти 
     if(all === false) {// Рахувати тільки парні (не пропускати нічого)
       sum+=i;
     }
  } else { 
  sum += i; //Тут непарні числа. Їх всіх рахуєм
  } 
}

console.log(sum);
alert(sum);













