// Part of a hackerrank coding challenge I did for an interview... I had to leave partway through (facepalm) and there was an outstanding bug I didn't solve...
// I hoped to keep going on my own, but I can't access the acceptance criteria, and I believe I missed something. All the same, there is some logic in here I want to work out.
'use server'
'use strict';

const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');

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
 * Complete the 'getUserTransaction' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER uid
 *  2. STRING txnType
 *  3. STRING monthYear
 *
 *  https://jsonmock.hackerrank.com/api/transactions/search?userId=
 */

const srcURL = "https://jsonmock.hackerrank.com/api/transactions/search?userId=";

async function getUserTransaction(uid, txnType, monthYear) {
    const initPull = await fetch(`${srcURL}${uid}`);
    console.log(initPull);
    return [];
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const uid = parseInt(readLine().trim(), 10);

    const txnType = readLine();

    const monthYear = readLine();

    const result = await getUserTransaction(uid, txnType, monthYear);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
