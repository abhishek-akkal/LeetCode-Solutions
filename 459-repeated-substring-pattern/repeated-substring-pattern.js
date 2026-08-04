/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubled = s + s;
    const sliced = doubled.slice(1, doubled.length - 1);
    return sliced.includes(s);
};