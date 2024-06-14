const Calculator = require("../src/calculator");

describe("Calculator basic operaions", () => {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator;
    })

    test("Add", () => {
        expect(calculator.add(1, 2)).toEqual(3);
    });

    test("Subtract", () => {
        expect(calculator.subtract(1, 2)).toEqual(-1);
    });

    test("Multiply", () => {
        expect(calculator.multiply(2, 3)).toEqual(6);
    });

    test("Divide", () => {
        expect(calculator.divide(6, 3)).toEqual(2);
    });

    test("Divide by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
    });
})