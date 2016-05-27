import {expect} from "chai";

import {Triangle} from "./triangle-class";
import {Errors} from "./error";

let triangle;

before(() => {
    triangle = new Triangle(1, 2, 2);
});

describe('triangle-class', () => {
    it('should exist', () => {
        expect(Triangle).not.to.be.undefined;
    });
});


describe('triangle-class#setSides()', () => {
    it('3 arguments should be defined and number', () => {

        const error = Errors.sidesDefinitionError;

        expect(() => triangle.setSides(1, 2, null)).throw(error);
        expect(() => triangle.setSides([1, 2, null])).throw(error);
        expect(() => triangle.setSides(1, null, 3)).throw(error);
        expect(() => triangle.setSides(null, 2, 3)).throw(error);
        expect(() => triangle.setSides((undefined, 2, 3))).throw(error);
        expect(() => triangle.setSides([1, 2, undefined])).throw(error);
        expect(() => triangle.setSides(1, undefined, 3)).throw(error);
        expect(() => triangle.setSides(undefined, 2, 3)).throw(error);
        expect(() => triangle.setSides([1, 2, false])).throw(error);
        expect(() => triangle.setSides(1, 2, false)).throw(error);
        expect(() => triangle.setSides(1, { value: 2 }, 3)).throw(error);
        expect(() => triangle.setSides("1", 2, 3)).throw(error);

        expect(() => { triangle.setSides(1, 2, 2) }).not.throw(error);
        expect(() => triangle.setSides([1, 2, 2])).not.throw(error);

    });
});

describe("triangle-class#setSides()", () => {
    it("should only accept this pattern as sides: (x + y > z) | (x + z > y) | (z + y > x)", () => {

        const error = Errors.validTriangleError;

        expect(() => triangle.setSides(1, 2, 10)).throw(error);
        expect(() => triangle.setSides(10, 2, 1)).throw(error);
        expect(() => triangle.setSides(1, 10, 2)).throw(error);
        expect(() => triangle.setSides([1, 2, 10])).throw(error);
        expect(() => triangle.setSides([10, 2, 1])).throw(error);
        expect(() => triangle.setSides([1, 10, 2])).throw(error);
        expect(() => triangle.setSides(1, 2, 3)).throw(error);
        expect(() => triangle.setSides(-1, 2, 2)).throw(error);
        expect(() => triangle.setSides(1, -2, 0)).throw(error);

        expect(() => triangle.setSides(1, 2, 2)).not.throw(error);
        expect(() => triangle.setSides([1, 2, 2])).not.throw(error);

    });
});

describe("triangle-class#getType()", () => {
    it("triangle's type should be equilateral with this sides: (x, x, x) ", () => {

        const type = "equilateral";

        triangle.setSides(2, 2, 2);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 2, 2]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 2, 2, 3]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 3, 4, 3]);
        expect(triangle.getType()).not.to.equal(type);
        expect(triangle.getType()).not.to.equal("isosceles");
        expect(triangle.getType()).to.equal("scalene");
    });
});

describe("triangle-class#getType()", () => {
    it("triangle's type should be isosceles with this sides: (x, x, y) ", () => {

        const type = "isosceles";

        triangle.setSides(2, 2, 3);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 2, 3]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 2, 3, 1]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 2, 3, 2]);
        expect(triangle.getType()).to.equal(type);
        expect(triangle.getType()).not.to.equal("equilateral");
        expect(triangle.getType()).to.equal(type);
    });
});

describe("triangle-class#getType()", () => {
    it("triangle's type should be scalene with this sides: (x, y, z) ", () => {

        const type = "scalene";
        triangle.setSides(2, 4, 3);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 4, 3]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 4, 3, 6]);
        expect(triangle.getType()).to.equal(type);

        triangle.setSides([2, 4, 3, 2]);
        expect(triangle.getType()).to.equal(type);
        expect(triangle.getType()).not.to.equal("isosceles");

    });
});
