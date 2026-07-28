/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    
    const getLiveNeighbors = (r, c) => {
        let live = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                let nr = r + i;
                let nc = c + j;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && (board[nr][nc] === 1 || board[nr][nc] === 2)) {
                    live++;
                }
            }
        }
        return live;
    };
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let neighbors = getLiveNeighbors(r, c);
            if (board[r][c] === 1 && (neighbors < 2 || neighbors > 3)) {
                board[r][c] = 2; 
            } else if (board[r][c] === 0 && neighbors === 3) {
                board[r][c] = 3; 
            }
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 2) board[r][c] = 0;
            if (board[r][c] === 3) board[r][c] = 1;
        }
    }
};