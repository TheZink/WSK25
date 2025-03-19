'use strict';

let t1 = prompt("Set first side:");
let t2 = prompt("Set second side:");
let t3 = prompt("Set third side:");

if (t1 === t2 && t1 === t3){
    document.querySelector('#calc').innerHTML = "The triangle is equilateral. All sides are equal."
} else if (t1 === t2 || t1 === t3 || t2 === t3) {
    document.querySelector('#calc').innerHTML = "The triangle is isosceles. Two sides are equal.";
} else {
    document.querySelector('#calc').innerHTML = "The triangle is scalene. No sides are equal."
}
