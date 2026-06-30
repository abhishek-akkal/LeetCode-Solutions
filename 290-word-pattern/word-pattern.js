var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = words[i];

        // char -> word
        if (charToWord.has(ch)) {
            if (charToWord.get(ch) !== word) {
                return false;
            }
        } else {
            charToWord.set(ch, word);
        }

        // word -> char
        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== ch) {
                return false;
            }
        } else {
            wordToChar.set(word, ch);
        }
    }

    return true;
};