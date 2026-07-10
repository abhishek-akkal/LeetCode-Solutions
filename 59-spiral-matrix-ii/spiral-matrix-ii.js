/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    let num = 1;
    
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) matrix[top][i] = num++;
        top++;
        
        for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;
        
        for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
        bottom--;
        
        for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
        left++;
    }
    
    return matrix;
};