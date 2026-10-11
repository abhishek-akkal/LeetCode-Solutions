/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const pos = i + 1;
        if (n % pos === 0) {
            sum += nums[i] * nums[i];
        }
    }

    return sum;
};