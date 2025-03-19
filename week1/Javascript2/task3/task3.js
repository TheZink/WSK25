'use strict';

let numbers = [];

let evenFound = 0;


while (true){
    let input = prompt("Give a positive integer or 'done' to finish");
    
    if (input === 'done') {
        break;
    }
    
    if (input % 2 === 0){
        numbers.push(Number(input));
    }
    
}

if (numbers.length === 0){
    document.getElementById("p1").innerHTML = "Even Numbers: None";
} else {
    document.getElementById("p1").innerHTML = "Even Numbers: " + numbers
}

document.getElementById("p2").innerHTML = "Loop is complete";


