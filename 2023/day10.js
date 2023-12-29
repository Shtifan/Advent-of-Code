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
    const stack = [{ x: start.x, y: start.y, steps: 0 }];
    const visited = new Set();
    let maxSteps = 0;

    while (stack.length > 0) {
        const { x, y, steps } = stack.pop();
        const key = `${x},${y}`;

        if (x < 0 || x >= arr[0].length || y < 0 || y >= arr.length || arr[y][x] === '.' || visited.has(key)) {
            continue;
        }

        visited.add(key);
        maxSteps = Math.max(maxSteps, steps);

        stack.push({ x: x + 1, y, steps: steps + 1 });
        stack.push({ x: x - 1, y, steps: steps + 1 });
        stack.push({ x, y: y + 1, steps: steps + 1 });
        stack.push({ x, y: y - 1, steps: steps + 1 });
    }

    return maxSteps;
}

const steps = calculateFurthestPoint(arr);

console.log(steps);
