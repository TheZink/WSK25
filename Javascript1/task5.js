const input = Number(prompt("Give a positive number"))
let sum = 0;

if (input > 0) {
    for (let i = 1; i <= input; i++) {
        sum += i;
    }

document.querySelector(
    '#target').innerHTML = 
    `Total sum of natural numbers to number ${input} is ${sum}`
}