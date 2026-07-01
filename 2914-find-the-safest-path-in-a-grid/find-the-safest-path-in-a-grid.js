/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return 0;
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const dist = Array.from({ length: n }, () => new Array(n).fill(-1));
    let queue = [];
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }
    
    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
    
    const hasPath = (val) => {
        if (dist[0][0] < val) return false;
        
        const visited = Array.from({ length: n }, () => new Array(n).fill(false));
        const pathQueue = [[0, 0]];
        visited[0][0] = true;
        
        let pathHead = 0;
        while (pathHead < pathQueue.length) {
            const [r, c] = pathQueue[pathHead++];
            
            if (r === n - 1 && c === n - 1) return true;
            
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] && dist[nr][nc] >= val) {
                    visited[nr][nc] = true;
                    pathQueue.push([nr, nc]);
                }
            }
        }
        return false;
    };
    
    let low = 0;
    let high = 2 * n;
    let ans = 0;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (hasPath(mid)) {
            ans = mid;        
            low = mid + 1;
        } else {
            high = mid - 1;  
        }
    }
    
    return ans;
};