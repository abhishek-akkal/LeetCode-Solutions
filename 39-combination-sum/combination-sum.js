var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (index, currentPath, currentSum) => {
        if (currentSum === target) {
            result.push([...currentPath]);
            return;
        }
        
        if (currentSum > target) {
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            currentPath.push(candidates[i]);
            backtrack(i, currentPath, currentSum + candidates[i]);
            currentPath.pop();
        }
    };
    
    backtrack(0, [], 0);
    return result;
};
