const caesarCipher = require("../src/caesarCipher");

describe("Caesar Cipher tests", () => {
    test("1", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
    });

    test("2", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
    });

    test("3", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    });

    test("4", () => {
        expect(caesarCipher("name_12", 1)).toBe("obnf_12")
    });
})