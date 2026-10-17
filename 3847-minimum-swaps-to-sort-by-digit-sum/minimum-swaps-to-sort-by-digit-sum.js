/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    
    const getDigitSum = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.trunc(num / 10);
        }
        return sum;
    };

    const p = Array.from({ length: n }, (_, i) => i);
    p.sort((a, b) => {
        const sumA = getDigitSum(nums[a]);
        const sumB = getDigitSum(nums[b]);
        if (sumA !== sumB) return sumA - sumB;
        return nums[a] - nums[b];
    });

    const target = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        target[p[i]] = i;
    }

    const visited = new Uint8Array(n);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || target[i] === i) continue;

        let cycleSize = 0;
        let curr = i;
        while (!visited[curr]) {
            visited[curr] = 1;
            curr = target[curr];
            cycleSize++;
        }
        if (cycleSize > 1) {
            swaps += cycleSize - 1;
        }
    }

    return swaps;
};