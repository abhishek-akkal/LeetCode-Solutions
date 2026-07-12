/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const zeroRows = new Array(m).fill(false);
    const zeroCols = new Array(n).fill(false);
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                zeroRows[r] = true;
                zeroCols[c] = true;
            }
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (zeroRows[r] || zeroCols[c]) {
                matrix[r][c] = 0;
            }
        }
    }
};