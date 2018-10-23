const chai = require("chai");
const expect = chai.expect;
const delay = require("../src/delay");

describe("Delay", () => {
    it("Given success is true should resolve with message", () => {
        delay(500, true)
            .then((msg) => {
                expect(msg).to.equal("RESOLVED after 500 ms.");
            });
    });

    it("Given success is false should reject with message", () => {
        delay(500, false)
            .catch((msg) => {
                expect(msg).to.equal("REJECTED after 500 ms.");
            });
    });
});