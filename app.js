/*
Author: Osahon Iyamu
Title: Dates
Date: 01-23-2024
*/ 

let registration = new Date(2020,0,5,8,30,45);
console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month(index): ${registration.getMonth()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);


let now = new Date();
console.log(now);
console.log(`Now Hours: ${now.getHours()}`);
console.log(`Now Minutes: ${now.getMinutes()}`);
console.log(`Now Seconds: ${now.getSeconds()}`);
console.log(`Now Ms: ${now.getMilliseconds()}`);

now.setFullYear(1999);
now.setMonth(4);

console.log(now)