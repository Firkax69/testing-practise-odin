const analyzeArray = require("../src/analyzeArray");

describe("Analyze Array", () => {
    test("fisrt test", () => {
        expect(analyzeArray([1, 99, 11, -20, 5, 54])).toMatchObject({
            average: 25,
            min: -20,
            max: 99,
            length: 6.
        })
    })
})