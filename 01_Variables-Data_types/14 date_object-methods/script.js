'use strict';

let x;
let date = new Date();

// get the time in milliseconds
x = date.getTime();

// get year
x = date.getFullYear();

// get month, the index is 0 based
x = date.getMonth();

// Intl API
x = Intl.DateTimeFormat('es-CO').format(date);

x = date.toLocaleString('es-Co', { month: 'long' });

x = date.toLocaleString('es-CO', {
        //weekday: 'long',
        //year: 'numeric',
        //month: 'long',
        //day: 'numeric',
        //hour: 'numeric',
        //minute: 'numeric',
        // second: 'numeric',
        // timeZone: 'America/Bogota',
});

console.log(x);