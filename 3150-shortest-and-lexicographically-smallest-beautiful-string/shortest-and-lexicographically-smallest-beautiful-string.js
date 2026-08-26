var shortestBeautifulSubstring = function(s, k) {
    let result = "";
    let onesCount = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (s[right] === '1') {
            onesCount++;
        }
        
        while (onesCount === k) {
            let current = s.substring(left, right + 1);
            
            if (result === "" || current.length < result.length || (current.length === result.length && current < result)) {
                result = current;
            }
            
            if (s[left] === '1') {
                onesCount--;
            }
            left++;
        }
    }
    
    return result;
};