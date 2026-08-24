var longestSubarray = function(nums) {
    let maxLen = 2;
    let currLen = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + nums[i - 2]) {
            currLen++;
        } else {
            currLen = 2;
        }
        maxLen = Math.max(maxLen, currLen);
    }

    return maxLen;
};