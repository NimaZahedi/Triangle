import {expect} from "chai";

import {getType} from "./triangle";
import {Errors} from "./error";

describe('triangle', () => {
    it('should exist', () => {
        expect(getType).not.to.be.undefined;
    });
});

describe('triangle#getType()', () => {
    it('3 arguments should be defined and integer', () => {

        const error = Errors.sidesDefinitionError;

        expect(() => getType(1, 2, null)).throw(error);
        expect(() => getType([1, 2, null])).throw(error);
        expect(() => getType(1, null, 3)).throw(error);
        expect(() => getType(null, 2, 3)).throw(error);
        expect(() => getType((undefined, 2, 3))).throw(error);
        expect(() => getType([1, 2, undefined])).throw(error);
        expect(() => getType(1, undefined, 3)).throw(error);
        expect(() => getType(undefined, 2, 3)).throw(error);
        expect(() => getType([1, 2, false])).throw(error);
        expect(() => getType(1, 2, false)).throw(error);
        expect(() => getType(1, { value: 2 }, 3)).throw(error);
        expect(() => getType("1", 2, 3)).throw(error);

        expect(() => { getType(1, 2, 2) }).not.throw(error);
        expect(() => getType([1, 2, 2])).not.throw(error);

    });
});

describe("triangle#getType()", () => {
    it("should only accept this pattern as sides: (x + y > z) | (x + z > y) | (z + y > x)", () => {

        const error = Errors.validTriangleError;

        expect(() => getType(1, 2, 10)).throw(error);
        expect(() => getType(10, 2, 1)).throw(error);
        expect(() => getType(1, 10, 2)).throw(error);
        expect(() => getType([1, 2, 10])).throw(error);
        expect(() => getType([10, 2, 1])).throw(error);
        expect(() => getType([1, 10, 2])).throw(error);
        expect(() => getType(1, 2, 3)).throw(error);
        expect(() => getType(-1, 2, 2)).throw(error);
        expect(() => getType(1, -2, 0)).throw(error);

        expect(() => getType(1, 2, 2)).not.throw(error);
        expect(() => getType([1, 2, 2])).not.throw(error);

    });
});

describe("triangle#getType()", () => {
    it("triangle's type should be equilateral with this sides: (x, x, x) ", () => {

        const type = "equilateral";

        expect(getType(2, 2, 2)).to.equal(type);
        expect(getType([2, 2, 2])).to.equal(type);
        expect(getType([2, 2, 2, 3])).to.equal(type);

        const act = getType([2, 3, 4, 3]);
        expect(act).not.to.equal(type);
        expect(act).not.to.equal("isosceles");
        expect(act).to.equal("scalene");
    });
});

describe("triangle#getType()", () => {
    it("triangle's type should be isosceles with this sides: (x, x, y) ", () => {

        const type = "isosceles";

        expect(getType(2, 2, 3)).to.equal(type);
        expect(getType([2, 2, 3])).to.equal(type);
        expect(getType([2, 2, 3, 1])).to.equal(type);

        const act = getType([2, 2, 3, 2]);
        expect(act).to.equal(type);
        expect(act).not.to.equal("equilateral");
        expect(act).to.equal(type);
    });
});

describe("triangle#getType()", () => {
    it("triangle's type should be scalene with this sides: (x, y, z) ", () => {

        const type = "scalene";

        expect(getType(2, 4, 3)).to.equal(type);
        expect(getType([2, 4, 3])).to.equal(type);
        expect(getType([2, 4, 3, 6])).to.equal(type);

        const act = getType([2, 4, 3, 2]);
        expect(act).to.equal(type);
        expect(act).not.to.equal("isosceles");
    });
});
