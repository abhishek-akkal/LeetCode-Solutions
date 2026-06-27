/**
 * @param {number[]} nums
 * @return {number}
 */
// var img_context; 
var maximumLength = function(nums) {
    let freq = new Map();
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    let maxLen = 1; 
    
    if (freq.has(1)) {
        let count1 = freq.get(1);
        let valid1s = count1 % 2 === 0 ? count1 - 1 : count1;
        maxLen = Math.max(maxLen, valid1s);
    }
    
    for (let [x, count] of freq) {
        if (x === 1) continue;
        
        let currentLen = 0;
        let current = x;
        
        while (freq.has(current) && freq.get(current) >= 2) {
            currentLen += 2;
            current = current * current;
        }
        
        if (freq.has(current) && freq.get(current) >= 1) {
            currentLen += 1;
        } else {
            currentLen -= 1; 
        }
        
        maxLen = Math.max(maxLen, currentLen);
    }
    
    return maxLen;
};