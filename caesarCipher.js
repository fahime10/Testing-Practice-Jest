function caeasarCipher(string) {
    let str1 = string.toLowerCase();

    let str2 = "";

    for (const char of str1) {
        str2 += shift(char);
    }

    return str2;
}

function shift(character) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
      ];

      const index = letters.indexOf(character);

      const shifted = wrap(index, 5);

      return letters.at(shifted);
}

function wrap(index, step) {
    return (index + step) % 26;
}

module.exports = caeasarCipher;