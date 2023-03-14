
let N;
let M;

while (true){
        let n = parseInt(prompt('Введіть перше число N'));
        let m = parseInt(prompt('Введіть друге число M'));
        N = n;  
        M = m;
        if (Number.isInteger(N) && Number.isInteger(M) &&  N>0 &&  N<M) break;
}
console.log("перше число N: " + N);
console.log("друге число M: " + M);

const question = confirm("Чи потрібно пропускати парні числа?") // true - так, false - ні
console.log("пропускати парні числа " + question);

let sum = 0;

for (let i = N; i <= M; i++) {
     if (i % 2 == 0) {
         if (question === false) {
                        sum += i;
         }
     } else {
                sum += i;

     }
};


console.log(sum);
alert(sum);