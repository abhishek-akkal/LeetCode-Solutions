var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    
    if (dead.has("0000")) return -1;
    
    const queue = [["0000", 0]]; 
    const visited = new Set(["0000"]);
    
    while (queue.length > 0) {
        const [current, steps] = queue.shift();
        
        if (current === target) {
            return steps;
        }
        
        for (let i = 0; i < 4; i++) {
            let digit = parseInt(current[i]);
            
            let up = (digit + 1) % 10;
            let down = (digit - 1 + 10) % 10;
            
            let nextUp = current.substring(0, i) + up + current.substring(i + 1);
            let nextDown = current.substring(0, i) + down + current.substring(i + 1);
            
            if (!visited.has(nextUp) && !dead.has(nextUp)) {
                visited.add(nextUp);
                queue.push([nextUp, steps + 1]);
            }
            
            if (!visited.has(nextDown) && !dead.has(nextDown)) {
                visited.add(nextDown);
                queue.push([nextDown, steps + 1]);
            }
        }
    }
    
    return -1;
};