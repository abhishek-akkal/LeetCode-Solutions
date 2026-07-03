var findMaxPathScore = function(edges, online, k) {
    const n = online.length;
    let uniqueCosts = new Set();
    let validEdges = [];
    
    for (let [u, v, cost] of edges) {
        if (online[u] && online[v]) {
            validEdges.push([u, v, cost]);
            uniqueCosts.add(cost);
        }
    }
    
    let costsArray = Array.from(uniqueCosts).sort((a, b) => a - b);
    
    const isValidPathPossible = (minEdgeCost) => {
        let adj = Array.from({ length: n }, () => []);
        let inDegree = new Array(n).fill(0);
        
        for (let [u, v, cost] of validEdges) {
            if (cost >= minEdgeCost) {
                adj[u].push([v, cost]);
                inDegree[v]++;
            }
        }
        
        let queue = [];
        for (let i = 0; i < n; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }
        
        let minCost = new Array(n).fill(Infinity);
        minCost[0] = 0;
        
        let head = 0;
        while (head < queue.length) {
            let u = queue[head++];
            
            for (let [v, cost] of adj[u]) {
                if (minCost[u] !== Infinity && minCost[u] + cost < minCost[v]) {
                    minCost[v] = minCost[u] + cost;
                }
                inDegree[v]--;
                if (inDegree[v] === 0) {
                    queue.push(v);
                }
            }
        }
        
        return minCost[n - 1] <= k;
    };
    
    let low = 0;
    let high = costsArray.length - 1;
    let ans = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midCost = costsArray[mid];
        
        if (isValidPathPossible(midCost)) {
            ans = midCost;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return ans;
};