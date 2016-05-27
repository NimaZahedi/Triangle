//Error messages 
import {Errors} from "./error";

//Pulic class 
export class Triangle {

    // immediately call setSides to set sides property after validatiion 
    constructor(side1, side2, side3) {
        this.setSides(side1, side2, side3);
    }

    // Set the sides of Triangle but call isValid first!
    setSides(side1, side2, side3) {
        this.sides = isValid(side1, side2, side3);
    }

    //returns the Triangle's type
    getType() {
        const sortedSides = this.sides.sort();

        if (sortedSides[0] === sortedSides[2])
            return "equilateral";
        else if (sortedSides.lastIndexOf(sortedSides[1]) === sortedSides.indexOf(sortedSides[1]))
            return "scalene";
        else
            return "isosceles";
    }
}

//This function simply call sidesValidatior and isTriagnle functions
function isValid(side1, side2, side3) {
    const sides = sidesValidatior(side1, side2, side3);

    if (!isTriagnle(sides))
        throw new Error(Errors.validTriangleError);

    return sides;
}

// This function test for arguments
// basically the args can be like (1, 3, 3) or array of number like [1, 2, 2]
//it makes sure all arguments should be number not null, undefined, {}, string, bool, ...
//and if side2, side3 are undefined, the first one (side1) should be array with the same restriction!
//then makes an array and return! or throw an error!
function sidesValidatior(side1, side2, side3) {

    if (side2 !== undefined || side3 !== undefined) {

        if (typeof side1 === "number" && typeof side2 === "number" && typeof side3 === "number")
            return [side1, side2, side3];
        else
            throw new Error(Errors.sidesDefinitionError);

    }
    else if (Array.isArray(side1)) {

        if (side1.every((s) => typeof s === "number"))
            return side1.slice(0, 3);
        else
            throw new Error(Errors.sidesDefinitionError);

    }
    else
        throw new Error(Errors.sidesDefinitionError);

}

// it checks for sides, there is a rule for Triangle that addition of each two sides should be greater than the other one!
// then return the result as a boolean!
function isTriagnle(sides) {
    const sum = sides.reduce((p, c) => p + c);
    return sides.every((s) => Math.sign(s) > 0 && s < sum - s);
}
