import Game from '../domain/game';

export default interface GameRepository {
  saveGame(game: Game): Promise<Game>;
  loadGame(id: string): Promise<Game>;
  deleteGame(id: string): Promise<void>;
  // eslint-disable-next-line semi
}
