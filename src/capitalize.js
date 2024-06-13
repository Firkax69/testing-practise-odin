function capitalize(string) {
    if (!string) return ""
    let firstLetter = string.substring(0, 1).toUpperCase();
    let restOfWord = string.slice(1);
    return firstLetter + restOfWord;
}

module.exports = { capitalize };