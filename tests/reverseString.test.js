const { reverseString } = require("../src/reverseString");

describe("Reverse", () => {
    test("Name", () => {
        expect(reverseString("Olha")).toBe("ahlO");
    });
    test("string", () => {
        expect(reverseString("ydal lufituaeB")).toBe("Beautiful lady");
    });
    test("Name", () => {
        expect(reverseString(0)).toBe("");
    });
})