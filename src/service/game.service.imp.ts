import { injectable, inject } from 'inversify';
import { Color, TYPES } from '../domain/types';
import Game from '../domain/game';
import IGameRepository from '../repository/game.repository';
import Movement from '../domain/movement';
import GameService from './game.service';
import Board from '../domain/board';
import GameNotCreated from '../domain/exceptions/gameNotCreated';

@injectable()
export default class GameServiceImp implements GameService {
  private game!: Game;
  private gameRepository: IGameRepository;

  constructor(@inject(TYPES.GameRepository) gameRepository: IGameRepository) {
    this.gameRepository = gameRepository;
  }

  movePiece(turn: Color, movement: Movement): void {
    this.game.movePiece(turn, movement);
  }

  getGameStatus(): Game {
    if (!this.game) throw new GameNotCreated('Create');
    return this.game.status;
  }

  initGame(): Game {
    const board = new Board();
    this.game = new Game(board);
    return this.game.status;
  }

  resetGame(): void {
    if (!this.game) throw new GameNotCreated('Reset');
    const id = this.game.getGameId;
    this.game = new Game(new Board());
    this.game.setGameId = id;
  }

  async saveGame(game: Game): Promise<Game> {
    return await this.gameRepository.saveGame(game);
  }

  async loadGame(id: string): Promise<Game> {
    return await this.gameRepository.loadGame(id);
  }

  async deleteGame(id: string): Promise<void> {
    await this.gameRepository.deleteGame(id);
  }
}
