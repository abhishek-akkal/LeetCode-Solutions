/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let currentVal = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + currentVal;
    }
    
    return result;
};