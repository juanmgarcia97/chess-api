export type ErrorType = 'Reset' | 'Create';

export default class GameNotCreated extends Error {
  constructor(type: ErrorType) {
    let message = '';
    type === 'Create'
      ? (message =
          'First you have to create or load a game to see the status, try again.')
      : (message =
          'First you have to create or load a game to reset a game, try again.');
    super(message);
  }
}
