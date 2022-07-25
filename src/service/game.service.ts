import Game from '../domain/game';
import Movement from '../domain/movement';
import { Color } from '../domain/types';

export default interface GameService {
  saveGame(game: Game): void;
  resetGame(): void;
  loadGame(id: string): Promise<Game>;
  deleteGame(id: string): Promise<void>;
  initGame(): Game;
  getGameStatus(): Game;
  movePiece(turn: Color, movement: Movement): void;
  // eslint-disable-next-line semi
}
