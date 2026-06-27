/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0; 
    
    let maxCount = 0; 

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === 1) {
            currentCount++;
            if(currentCount > maxCount){
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }
    return maxCount; 
}