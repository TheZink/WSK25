'use strict';

let numbers = [];
const list = document.getElementById("targetList");
const evenM = document.getElementById("p1");
const loopM = document.getElementById("p2");

let evenFound = 0;


while (true){
    let input = prompt("Give a positive integer or 'done' to finish");

    if (input === 'done') {
        break;
    } else {
    numbers.push(Number(input));
    }

}

for (let k = 0; k < numbers.length; k++){
    let num = numbers[k]
    if (num % 2 === 0){
        evenFound++;
        evenM.innerHTML = `${evenFound} even numbers found`;
        let item = document.createElement('li');
        item.textContent = num;
        list.appendChild(item);
    }
}


loopM.innerHTML = "Loop is complete";


