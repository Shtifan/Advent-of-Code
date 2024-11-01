const fs = require("fs");

const input = fs.readFileSync("./2023/day3.txt", "utf-8");
const arr = input
    .trim()
    .split("\n")
    .map((line) => [".", ...line.trim().split(""), "."]); // Add '.' on left and right of each line

// Create a row of '.' with the length of any inner array (e.g., arr[0].length)
const paddingRow = Array(arr[0].length).fill(".");

// Add paddingRow to the top and bottom of the array
arr.unshift(paddingRow);
arr.push(paddingRow);

console.log(arr.map((row) => row.join("")).join("\n"));

let sum = 0;

function findNumbers(arr) {
    let numbers = [];

    for (let row = 0; row < arr.length; row++) {
        let col = 0;

        while (col < arr[row].length) {
            let numberStr = "";

            // Check if the character is a digit
            while (col < arr[row].length && arr[row][col] >= "0" && arr[row][col] <= "9") {
                numberStr += arr[row][col];
                col++;
            }

            if (numberStr.length > 0) {
                // Convert the string of digits to an integer
                let value = parseInt(numberStr, 10);

                // Create the number object
                numbers.push({
                    value: value,
                    row: row,
                    col: col - numberStr.length,
                    length: numberStr.length,
                });
            }

            col++;
        }
    }

    return numbers;
}

let numbers = findNumbers(arr);

function check(number, arr) {
    let row = number.row;
    let col = number.col;
    let length = number.length;

    if (arr[row][col - 1] === "*" || arr[row][col + length] === "*") return true;

    for (let i = col - 1; i <= col + length; i++) {
        if (arr[row + 1][i] === "*" || arr[row - 1][i] === "*") return true;
    }

    return false;
}

// Filter out numbers that don’t pass the `check` function
numbers = numbers.filter((number) => check(number, arr));

// Calculate sum
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i].value;
}

console.log(numbers);
console.log(sum);
