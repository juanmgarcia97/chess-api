export default class GameNotFound extends Error {
  constructor() {
    super('The game was not found');
  }
}
