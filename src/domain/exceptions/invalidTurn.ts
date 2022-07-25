export default class InvalidTurn extends Error {
  constructor() {
    super("Invalid move, it's not your turn");
  }
}
