const fs = require('fs');

const fileContent = fs.readFileSync('./2023/day3.txt', 'utf-8');

function parseFileContentToArray(content) {
    const lines = content.trim().split('\n');
    const parsedArray = lines.map(line => line.trim().split(''));
    return parsedArray;
}

const arr = parseFileContentToArray(fileContent);

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
    
}

let sum = 0;

let numbers = find(arr);
//console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    if (check(arr, numbers[i])) {
        console.log(numbers[i].value);
        sum += numbers[i].value;
    }
}

console.log(sum);
