var partition = function(s) {
    const result = [];
    
    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    
    const backtrack = (start, currentPath) => {
        if (start === s.length) {
            result.push([...currentPath]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                currentPath.push(s.substring(start, end + 1));
                backtrack(end + 1, currentPath);
                currentPath.pop();
            }
        }
    };
    
    backtrack(0, []);
    return result;
};