/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let lastSeen = { 'a': -1, 'b': -1, 'c': -1 };
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        lastSeen[s[i]] = i;
        
        let minIndex = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);
        
        if (minIndex !== -1) {
            count += minIndex + 1;
        }
    }
    
    return count;
};