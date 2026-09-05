var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Array(10).fill(false));
    const cols = Array.from({ length: 9 }, () => new Array(10).fill(false));
    const boxes = Array.from({ length: 9 }, () => new Array(10).fill(false));
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') continue;
            
            let val = board[r][c] - '0';
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (rows[r][val] || cols[c][val] || boxes[boxIndex][val]) {
                return false;
            }
            
            rows[r][val] = true;
            cols[c][val] = true;
            boxes[boxIndex][val] = true;
        }
    }
    
    return true;
};
