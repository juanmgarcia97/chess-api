export default class InvalidPieceMovement extends Error {
    constructor(pieceType: string) {
        let invalidMessage = 'Invalid move. Your ';
        switch(pieceType) {
            case 'King':
                invalidMessage += pieceType;
                super(`${invalidMessage} only can move 1 space in any direction.`);
                break;
            case 'Queen':
                invalidMessage += pieceType;
                super(`${invalidMessage} can move horizontally, vertically and diagonally but can't jump pieces.`);
                break;
            case 'Knight':
                invalidMessage += pieceType;
                super(`${invalidMessage} only can move L.`);
                break;
            case 'Bishop':
                invalidMessage += pieceType;
                super(`${invalidMessage} only can move diagonally but can't jump pieces.`);
                break;
            case 'Rook':
                invalidMessage += pieceType;
                super(`${invalidMessage} can move horizontally and vertically but can't jump pieces.`);
                break;
            case 'Pawn':
                invalidMessage += pieceType;
                super(`${invalidMessage} can move forward but can't jump pieces.`);
                break;

        }
    }
}