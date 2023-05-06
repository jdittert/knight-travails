/* eslint-disable no-plusplus */
function createBoard() {
    const board = [];
    let x;
    let y;
    for (x = 0; x < 8; x++) {        
        for (y = 0; y < 8; y++) {
            board.push([x, y]);
        };
    }
    return board;
}

const board = createBoard();

function isLegal([x, y]) {
    if (x > 7 || x < 0 || y > 7 || y < 0) return false;
    return true;
}

function findMoves([x, y]) {
    const moves = [];
    if (x > 7 || x < 0 || y > 7 || y < 0) return null;
    if (isLegal([(x + 2), (y + 1)])) moves.push([(x + 2), (y + 1)]);
    if (isLegal([(x + 2), (y - 1)])) moves.push([(x + 2), (y - 1)]);
    if (isLegal([(x - 2), (y + 1)])) moves.push([(x - 2), (y + 1)]);
    if (isLegal([(x - 2), (y - 1)])) moves.push([(x - 2), (y - 1)]);
    if (isLegal([(x + 1), (y + 2)])) moves.push([(x + 1), (y + 2)]);
    if (isLegal([(x + 1), (y - 2)])) moves.push([(x + 1), (y - 2)]);
    if (isLegal([(x - 1), (y + 2)])) moves.push([(x - 1), (y + 2)]);
    if (isLegal([(x - 1), (y - 2)])) moves.push([(x - 1), (y - 2)]);
    return moves;
}


console.log(findMoves([2, 6]));
console.log(findMoves(findMoves([2, 6])[0]));