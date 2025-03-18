'use strict';
let numbers = [];

for (let i = 0; i < 5; i++){
    let input1 = Number(prompt("Give a integer:"));
    numbers.push(input1);
}

document.querySelector("#p1").innerHTML = numbers;
console.log(numbers);

const input2 = Number(prompt("Enter numbert to find it"));

if (numbers.includes(input2)) {
    document.querySelector("#p2").innerHTML = `Number found in the array!`;
} else {
    document.querySelector("#p2").innerHTML = `Number not found!`
}

numbers.pop(numbers.length-1);
document.querySelector("#p3").innerHTML = numbers;

numbers.sort(function(a,b) {return b-a});
document.querySelector("#p4").innerHTML = numbers;
console.log(numbers)




// Display the sorted numbers array on the HTML document or in the console.