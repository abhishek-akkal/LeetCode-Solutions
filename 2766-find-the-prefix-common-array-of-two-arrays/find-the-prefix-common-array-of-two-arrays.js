var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const C = new Array(n);
    const seen = new Array(n + 1).fill(0);
    let commonCount = 0;
    
    for (let i = 0; i < n; i++) {
        seen[A[i]]++;
        if (seen[A[i]] === 2) {
            commonCount++;
        }
        
        seen[B[i]]++;
        if (seen[B[i]] === 2) {
            commonCount++;
        }
        
        C[i] = commonCount;
    }
    
    return C;
};