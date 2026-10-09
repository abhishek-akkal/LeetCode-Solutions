/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insertions = 0;
    let openNeeded = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openNeeded++;
        } else {
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;
            } else {
                insertions++;
            }

            if (openNeeded > 0) {
                openNeeded--;
            } else {
                insertions++;
            }
        }
    }

    insertions += openNeeded * 2;

    return insertions;
};