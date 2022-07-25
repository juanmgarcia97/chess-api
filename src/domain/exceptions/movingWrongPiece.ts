export default class MovingWrongPiece extends Error {
  constructor() {
    super("You can't move an opponent piece.");
  }
}
