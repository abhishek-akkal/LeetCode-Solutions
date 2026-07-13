/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        result = result * 10 + digit;
        i++;
    }
    
    result *= sign;
    
    const INT_MIN = Math.pow(-2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;
    
    return result;
};