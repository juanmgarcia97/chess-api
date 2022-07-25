import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import GameNotFound from '../domain/exceptions/gameNotFound';
import Game from '../domain/game';
import GameRepository from '../repository/game.repository';
import { AppDataSource } from './persistence/db.config';
import GameEntity from './persistence/entities/game.entity';
import GameMapper from './persistence/mappers/game.mapper';

@injectable()
export default class GameRepositoryImp implements GameRepository {
  private gameRepository!: Repository<GameEntity>;

  constructor() {
    this.gameRepository = AppDataSource.getRepository(GameEntity);
  }

  async saveGame(game: Game): Promise<Game> {
    const gameEntity = await this.gameRepository.save(
      GameMapper.toGamePersistence(game)
    );
    return GameMapper.toGameDomain(gameEntity);
  }

  async loadGame(id: string): Promise<Game> {
    const game = await this.gameRepository.findOneBy({ gameId: id });
    if (game === null) throw new GameNotFound();
    return GameMapper.toGameDomain(game);
  }

  async deleteGame(id: string): Promise<void> {
    const game = await this.gameRepository.findOneBy({ gameId: id });
    if (game !== null) await this.gameRepository.remove(game);
  }
}
