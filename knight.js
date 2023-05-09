/* eslint-disable no-plusplus */
function createBoard() {
    const board = [];
    let x;
    let y;
    for (x = 0; x < 8; x++) {        
        for (y = 0; y < 8; y++) {
            board.push(([x, y]).toString());
        };
    }
    return board;
}

const board = createBoard();

function isLegal([x, y]) {
    if (!board.includes(([x, y]).toString())) return false;
    return true;
}

function Square(pos, path) {
    if (!isLegal(pos)) return null;
    return { pos, path};
}

function knightTravails([x, y], [a, b]) {
    if (!isLegal([x, y]) || !isLegal([a, b])) return console.log('Please enter valid squares. (Board is 0 x 7)');
    
    const queue = [Square([x, y], [[x, y]])];
    let currentSquare = queue.shift();

    while (currentSquare.pos[0] !== a || currentSquare.pos[1] !== b) {
        const moves = [
            [(currentSquare.pos[0] + 2), (currentSquare.pos[1] + 1)],
            [(currentSquare.pos[0] + 2), (currentSquare.pos[1] - 1)],
            [(currentSquare.pos[0] - 2), (currentSquare.pos[1] + 1)],
            [(currentSquare.pos[0] - 2), (currentSquare.pos[1] - 1)],
            [(currentSquare.pos[0] + 1), (currentSquare.pos[1] + 2)],
            [(currentSquare.pos[0] + 1), (currentSquare.pos[1] - 2)],
            [(currentSquare.pos[0] - 1), (currentSquare.pos[1] + 2)],
            [(currentSquare.pos[0] - 1), (currentSquare.pos[1] - 2)]
        ];
        moves.forEach((move) => {
            const square = Square(move, currentSquare.path.concat([move]));
            if (square) {
                queue.push(square);
            }
        });
        currentSquare = queue.shift();
    }
    console.log(`=> You made it in ${currentSquare.path.length - 1} moves! Here's your path:`);
    currentSquare.path.forEach((square) => {
        console.log(square);
    });
}

knightTravails([0, 1], [2, 3]);

knightTravails([10, 3], [2, 2]);




