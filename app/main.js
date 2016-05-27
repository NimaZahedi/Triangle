import {getType} from "./triangle";
import {Triangle} from "./triangle-class";



const args = process.argv[2].split(',');
const sides = [];

for (let arg of args) {
    sides.push(Number(arg));
}

try {
    const tr = new Triangle(sides);
    console.log(tr.getType());
}
catch (e) {
    console.log(`Error Name: ${e.name}, message: ${e.message}`);
}

try {
    console.log(getType(sides));
}
catch (e) {
    console.log(`Error Name: ${e.name}, message: ${e.message}`);
}