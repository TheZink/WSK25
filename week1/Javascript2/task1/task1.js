const fruits = ["apple", "banana", "orange", " grape", "kiwi"];
let vegetables = [];

document.querySelector("#p1").innerHTML = fruits;
document.querySelector("#p2").innerHTML = `Lenght of list: ${fruits.length}`
document.querySelector("#p3").innerHTML = `Fruits at index 2 is ${fruits[2]}`
document.querySelector("#p4").innerHTML = `Last Element of Fruits: ${fruits[fruits.length-1]}`

for (i = 0; i < 3; i++) {
    let input = prompt("Write a vegetables");
    vegetables.push(input);
}
document.querySelector("#p5").innerHTML = vegetables;
document.querySelector("#p6").innerHTML = `Lenght of list: ${vegetables.length}`