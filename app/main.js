import {getType} from "./triangle";

const args = process.argv[2].split(',');
const sides = [];

for (let arg of args) {
    sides.push(Number(arg));
}

try {
    console.log(getType(sides));
}
catch (e) {
    console.log(`Error Name: ${e.name}, message: ${e.message}`);
}