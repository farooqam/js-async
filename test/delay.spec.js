const chai = require("chai");
const expect = chai.expect;
const delay = require("../src/delay");

describe("Delay", () => {
    it("Given success is true should resolve with message", async () => {
        let msg = await delay.delay(500, true);
        expect(msg).to.equal("RESOLVED after 500 ms.");
    });

    it("Given success is false should reject with message", async () => {
        await delay.delay(500, false)
            .catch((err) => expect(err).to.equal("REJECTED after 500 ms."));
    });
});