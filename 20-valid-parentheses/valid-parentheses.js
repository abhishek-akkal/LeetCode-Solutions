/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (pairs[char]) {
            let topElement = stack.length > 0 ? stack.pop() : '#';
            if (pairs[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};