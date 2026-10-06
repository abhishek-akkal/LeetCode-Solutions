/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);      
    const INT_MAX = Math.pow(2, 31) - 1;  

    let rev = 0;
    
    while (x !== 0) {
        const pop = Math.trunc(x / 10);
        const digit = x % 10;
        x = pop;

        if (rev > Math.trunc(INT_MAX / 10) || (rev === Math.trunc(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        if (rev < Math.trunc(INT_MIN / 10) || (rev === Math.trunc(INT_MIN / 10) && digit < -8)) {
            return 0;
        }

        rev = rev * 10 + digit;
    }

    return rev;
};