'use strict';

const x = Math.floor(Math.random() * 100);

const y = Math.floor(Math.random() * 50);

// sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

// difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

// product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

// quotient 
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

// reminder 
const reminder = x % y;
const reminderOutput = `${x} % ${y} = ${reminder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(reminderOutput);