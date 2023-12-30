const fs = require('fs');

const fileContent = fs.readFileSync('./2023/day10.txt', 'utf-8');

function parseFileContentToArray(content) {
    const lines = content.trim().split('\n');
    const parsedArray = lines.map(line => line.trim().split(''));
    return parsedArray;
}

const arr = parseFileContentToArray(fileContent);

function findStart(arr) {
    for (let i = 0; i < arr.length; i++) {
        const line = arr[i];
        const index = line.indexOf('S');

        if (index !== -1) {
            return { x: index, y: i };
        }
    }
}

function calculateFurthestPoint(arr) {
    const start = findStart(arr);
    
}

const steps = calculateFurthestPoint(arr);

console.log(steps);
