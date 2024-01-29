'use strict';

let x;

// object wrapper
const num = new Number(1000);

// number prototype 
x = num.__proto__;

// .toFixed() method
x = num.toFixed(2);

x = num.toLocaleString('ar-EG');
 
console.log(x);