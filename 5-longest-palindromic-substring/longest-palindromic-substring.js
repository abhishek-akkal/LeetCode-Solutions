/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";

    let start = 0;
    let maxLength = 0;

    // Helper to expand outward from the center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome found
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes (e.g., "aba", center is i)
        const len1 = expandAroundCenter(i, i);
        // Even length palindromes (e.g., "abba", center is between i and i+1)
        const len2 = expandAroundCenter(i, i + 1);

        const len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            // Calculate the starting index of the longest palindrome found
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
};