/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    const directions = [
        [-1, 0],  
        [1, 0],   
        [0, -1],  
        [0, 1],   
        [-1, -1], 
        [-1, 1],  
        [1, -1],  
        [1, 1]    
    ];
    
    const opponentColor = color === 'W' ? 'B' : 'W';
    
    for (const [dr, dc] of directions) {
        let r = rMove + dr;
        let c = cMove + dc;
        let length = 1; 
        
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            let currentCell = board[r][c];
            
            if (currentCell === '.') {
                break;
            }
            
            if (currentCell === opponentColor) {
                length++;
            } else if (currentCell === color) {
                if (length >= 2) {
                    return true; 
                }
                break;
            }
            
            r += dr;
            c += dc;
        }
    }
    
    return false;
};