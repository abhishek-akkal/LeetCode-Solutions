var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const maxHealth = Array.from({ length: m }, () => new Array(n).fill(-1));
    
    let startHealth = health - grid[0][0];
    if (startHealth <= 0) return false;
    
    maxHealth[0][0] = startHealth;
    let queue = [[0, 0, startHealth]]; 
    
    let head = 0;
    while (head < queue.length) {
        const [r, c, h] = queue[head++];
        
        if (h < maxHealth[r][c]) continue;
        
        if (r === m - 1 && c === n - 1) {
            return true;
        }
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                let nextHealth = h - grid[nr][nc];
                
                if (nextHealth >= 1 && nextHealth > maxHealth[nr][nc]) {
                    maxHealth[nr][nc] = nextHealth;
                    queue.push([nr, nc, nextHealth]);
                }
            }
        }
    }
    
    return maxHealth[m - 1][n - 1] >= 1;
};