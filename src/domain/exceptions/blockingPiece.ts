export default class BlockingPiece extends Error {
  constructor() {
    super("Can't move to that position, some other piece is blocking the way!");
  }
}
