const fs = require('fs');

const input = fs.readFileSync('./2023/day10.txt', 'utf-8');
const arr = input
  .trim()
  .split('\n')
  .map(line => [...line.trim()]);

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
