const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function calculateTaxes(salary){
    return this.tax * salary;
}

console.log(calculateTaxes.call(ukraine, 2600));


function getMiddleTaxes(){
    return this.tax * this.middleSalary
}

console.log(getMiddleTaxes.call(litva));


 function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(getTotalTaxes.call(latvia));


function getMySalary() {
   const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
   const taxes = +(this.tax * salary).toFixed(2);
   const profit = +(salary - taxes).toFixed(2);
   console.log({salary, taxes, profit });
}

getMySalary.call(ukraine);
setInterval(() => {getMySalary.call(ukraine)}, 10000);
 