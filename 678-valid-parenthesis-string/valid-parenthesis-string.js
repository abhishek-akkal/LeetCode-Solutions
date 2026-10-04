/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (const char of s) {
        if (char === '(') {
            minOpen++;
            maxOpen++;
        } else if (char === ')') {
            minOpen = Math.max(0, minOpen - 1);
            maxOpen--;
        } else { 
            minOpen = Math.max(0, minOpen - 1);
            maxOpen++; 
        }

        if (maxOpen < 0) {
            return false;
        }
    }

    return minOpen === 0;
};