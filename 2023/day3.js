const fs = require('fs');

const input = fs.readFileSync('./2023/day3.txt', 'utf-8');
const arr = input
    .trim()
    .split('\n')
    .map(line => [...line.trim()]);

function find(arr) {
    const numbers = [];
    let currentNumber = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            const parsedNumber = parseInt(element);
            if (!isNaN(parsedNumber)) {
                currentNumber += element;
            } else if (currentNumber !== '') {
                numbers.push({ value: parseInt(currentNumber), row: i, col: j - currentNumber.length });
                currentNumber = '';
            }
        }
        if (currentNumber !== '') {
            numbers.push({ value: parseInt(currentNumber), row: i, col: arr[i].length - currentNumber.length });
            currentNumber = '';
        }
    }
    return numbers;
}

function check(arr, number) {
    const { value, row, col } = number;
    const digits = value.toString().length;

    for (let i = col; i < col + digits; i++) {
        if (row + 1 < arr.length && arr[row + 1][i] !== '.') return false;
        if (row - 1 >= 0 && arr[row - 1][i] !== '.') return false;
        if (i >= 0 && i < arr[row].length && arr[row][i] !== '.') return false;
    }

    if (col - 1 >= 0 && arr[row][col - 1] !== '.') return false;
    if (col + 1 < arr[row].length && arr[row][col + 1] !== '.') return false;

    if (row - 1 >= 0 && col - 1 >= 0 && arr[row - 1][col - 1] !== '.') return false;
    if (row + 1 < arr.length && col + 1 < arr[row].length && arr[row + 1][col + 1] !== '.') return false;
    if (row + digits + 1 < arr.length && col + 1 < arr[row].length && arr[row + digits + 1][col + 1] !== '.') return false;
    if (row + digits - 1 >= 0 && col - 1 >= 0 && arr[row + digits - 1][col - 1] !== '.') return false;

    return true;
}

let sum = 0;

let numbers = find(arr);
//console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    if (!check(arr, numbers[i])) {
        console.log(numbers[i].value);
        sum += numbers[i].value;
    }
}

console.log(sum);
