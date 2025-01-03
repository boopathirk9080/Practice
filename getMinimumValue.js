'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getMinimumValue' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY power
 *  2. INTEGER armor
 */

function getMinimumValue(power, armor) {
    // Total health required (sum of all power values)
    const totalDamage = power.reduce((sum, val) => sum + val, 0);
    
    // Maximum damage reduced by armor
    const maxPower = Math.max(...power);
    const armorReduction = Math.min(maxPower, armor);
    
    // Final health after applying armor
    return BigInt(totalDamage - armorReduction + 1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const powerCount = parseInt(readLine().trim(), 10);

    let power = [];

    for (let i = 0; i < powerCount; i++) {
        const powerItem = parseInt(readLine().trim(), 10);
        power.push(powerItem);
    }

    const armor = parseInt(readLine().trim(), 10);

    const result = getMinimumValue(power, armor);

    ws.write(result + '\n');

    ws.end();
}


