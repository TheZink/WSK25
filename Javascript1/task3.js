'use strict';

let t1 = prompt("Set first side:");
let t2 = prompt("Set second side:");
let t3 = prompt("Set third side:");

if (t1 === t2 && t1 === t2 && t2 === t3){
    document.querySelector('#calc').innerHTML = "Triangle is equilateral. All sides are equals"
} else if (t1 === t2 && t2 != t3) {
    document.querySelector('#calc').innerHTML = "Triangle is isosceles. Two sides are equals";
} else {
    document.querySelector('#calc').innerHTML = "Triangle is scalene. No sides are equal"
}
