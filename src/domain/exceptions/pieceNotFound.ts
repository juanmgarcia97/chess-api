export default class PieceNotFound extends Error {
    constructor() {
        super("Piece don't found on this position")
    }
}