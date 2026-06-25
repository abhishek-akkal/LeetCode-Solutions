/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let totalSubarrays = 0; 
    const n = nums.length;

    for(let i = 0; i < n; i++) {

        let balance = 0; 

        for(let j = i; j < n; j++) {

            if(nums[j] === target) {
                balance += 1; 
            } else {
                balance -= 1; 
            }

            if(balance > 0) {
                totalSubarrays++;
            }
        }
    }

    return totalSubarrays; 
};