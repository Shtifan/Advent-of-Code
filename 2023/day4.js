const fs = require('fs');

const fileContent = fs.readFileSync('./2023/day4.txt', 'utf-8');
const lines = fileContent.split('\n');

function points(n) {
    if (n === 0) {
        return 0;
    } else {
        return Math.pow(2, n - 1);
    }
}

function checkWinning(parts) {
    let numbers = parts[0]
        .split(/\s+/)
        .map(Number)
        .filter(num => num !== 0);
    let winning = parts[1]
        .split(/\s+/)
        .map(Number)
        .filter(num => num !== 0);
    //console.log(numbers);
    //console.log(winning);

    const correctGuesses = winning.filter(winning => numbers.includes(winning)).length;

    //console.log(correctGuesses);

    return points(correctGuesses);
}

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    const cardNumberIndex = line.indexOf(':');
    const lineWithoutCardNumber = line.slice(cardNumberIndex + 1).trim();

    const parts = lineWithoutCardNumber.split('|');
    //console.log(parts);

    sum += checkWinning(parts);
}

console.log(sum);
