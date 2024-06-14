function caesarCipher(string, key) {
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        if (character.match(/[a-z]/)) {
            let index = lowerAlphabet.indexOf(character);
            result = result + lowerAlphabet[(index + key) % 26];
        } else if (character.match(/[A-Z]/)) {
            let index = upperAlphabet.indexOf(character);
            result = result + upperAlphabet[(index + key) % 26];
        } else {
            result = result + character
        }
    }

    return result;
}

module.exports = caesarCipher;