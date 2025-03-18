'use strict';

let input = prompt("Give a temperature in celsius: ");

let faren = (Number(input) * 9 / 5) + 32;
let kelvin = Number(input) + 273.15;

document.querySelector('#temperature').innerHTML = `${input} celsius is ${faren} in Fahrenheit and ${kelvin} in Kelvin`;
