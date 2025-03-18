'use strict';
let numbers = [];

for (let i = 0; i < 5; i++){
    let input1 = Number(prompt("Give a integer:"));
    numbers.push(input1);
}

document.querySelector("#p1").innerHTML = numbers;
console.log(numbers);

const input2 = Number(prompt("Enter index number"));

if (numbers.includes(input2)) {
    document.querySelector("#p2").innerHTML = `Number found in the array!`;
} else {
    document.querySelector("#p2").innerHTML = `Number not found!`
}

numbers.pop(numbers.length-1);
document.querySelector("#p3").innerHTML = numbers;

numbers.sort();
document.querySelector("#p4").innerHTML = numbers;




// Sort the numbers array in ascending numerical order using the 
// sort() method with a custom comparison function.

// Display the sorted numbers array on the HTML document or in the console.