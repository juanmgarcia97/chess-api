export default class InvalidGameId extends Error {
  constructor() {
    super('You entered an invalid UUID, please verify and try again.');
  }
}
