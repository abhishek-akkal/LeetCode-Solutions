/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    // Create an array of strings for each row
    const rows = new Array(Math.min(numRows, s.length)).fill('');
    let currentRow = 0;
    let goingDown = false;

    // Iterate through each character in the string
    for (const char of s) {
        rows[currentRow] += char;

        // Reverse direction at the top or bottom boundaries
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};