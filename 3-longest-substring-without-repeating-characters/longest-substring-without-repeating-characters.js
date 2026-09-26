/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    // Map to store character and its most recent index
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already seen and is inside the current window
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        charMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};