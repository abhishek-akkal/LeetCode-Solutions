/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const width = right - left;
        const currentArea = width * Math.min(height[left], height[right]);
        max = Math.max(max, currentArea);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};