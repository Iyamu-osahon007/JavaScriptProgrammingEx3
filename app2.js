let birthDate = new Date(1990,7,3);
console.log(birthDate);

console.log(`What is the date 1 billion seconds from my birthday and how old am I or will be that year.`);

let seconds = 1000000000
let days = seconds / 86400;

let nextDate = birthDate.getDate() + days;

let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(),birthDate.getDate());


newDate.setDate(nextDate);

console.log(`Date from my brithdate in 1 billion seconds is ${newDate}`);

let age = newDate.getFullYear() - birthDate.getFullYear();
console.log(`My age in the year of ${newDate.getFullYear()} is or will be ${age}`);

//1 Billion milliseconds from my Birthday




