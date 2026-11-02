var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        charMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
