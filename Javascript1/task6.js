const input = Number(prompt("Give a positive integer"));
const table = document.getElementById("#target");

if (input > 0) {   
    for (let i = 1; i <= input; i++) {
        let row = document.createElement("tr");

        for (let j = 1; j <= input; j++) {
            numbers = i * j;
            let line = document.createElement("td");
            line.textContent = numbers;
            row.appendChild(line)
        }

        table.appendChild(row);
    }
} else {
    document.querySelector("#p1").innerHTML = "Error: Negative integer!"
}
