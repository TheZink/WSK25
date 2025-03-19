'use strict';

let x1 = prompt('Give X1 coordinates:');
let y1 = prompt('Give Y1 coordinates');
let x2 = prompt('Give X2 coordinates');
let y2 = prompt('Give Y2 coordinates');

let calc = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector("#coord").innerHTML = `Distance between two points is ${calc}`