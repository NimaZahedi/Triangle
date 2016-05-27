import {getType} from "./triangle";

const args = process.argv[2].split(',');
const sides = [];

for (let arg of args) {
    sides.push(Number(arg));
}

console.log(getType(sides));