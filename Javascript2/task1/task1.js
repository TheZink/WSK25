const list_f = ["apple", "banana", "orange", " grape", "kiwi"];
let list_v = [];

document.querySelector("#p1").innerHTML = list_f;
document.querySelector("#p2").innerHTML = `Lenght of list: ${list_f.length}`
document.querySelector("#p3").innerHTML = `Fruits at index 2 is ${list_f[2]}`
document.querySelector("#p4").innerHTML = `Last Element of Fruits: ${list_f[list_f.length-1]}`

for (i = 0; i < 3; i++) {
    let input = prompt("Write a vegetables");
    list_v.push(input);
}
document.querySelector("#p5").innerHTML = list_v;
document.querySelector("#p6").innerHTML = `Lenght of list: ${list_v.length}`