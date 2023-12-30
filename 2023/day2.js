const fs = require('fs');

const fileContent = fs.readFileSync('./2023/day2.txt', 'utf-8');
const lines = fileContent.split('\n');

function calculateBalls(part) {
    const regex = /(\d+) (red|green|blue)/g;
    let match;
    let redBalls = 0;
    let greenBalls = 0;
    let blueBalls = 0;

    while ((match = regex.exec(part)) !== null) {
        const count = parseInt(match[1]);
        const color = match[2];

        switch (color) {
            case 'red':
                redBalls += count;
                break;
            case 'green':
                greenBalls += count;
                break;
            case 'blue':
                blueBalls += count;
                break;
        }
    }

    return { redBalls, greenBalls, blueBalls };
}

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const parts = line.split(';');

    const gameId = i + 1;

    let flag = false;
    let redBalls, greenBalls, blueBalls;

    for (const part of parts) {
        console.log(part);

        ({ redBalls, greenBalls, blueBalls } = calculateBalls(part));

        console.log(redBalls, greenBalls, blueBalls);

        if (redBalls > 12 || greenBalls > 13 || blueBalls > 14) {
            flag = true;
            break;
        }
    }

    if (flag == false) sum += gameId;
}

console.log(sum);
