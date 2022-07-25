import { Container } from 'inversify';
import { TYPES } from './src/domain/types';
import GameRepository from './src/repository/game.repository';
import GameService from './src/service/game.service';
import GameRepositoryImp from './src/infrastructure/game.repository.imp';
import GameServiceImp from './src/service/game.service.imp';

const container = new Container();

container.bind<GameRepository>(TYPES.GameRepository).to(GameRepositoryImp);
container.bind<GameService>(TYPES.GameService).to(GameServiceImp);

export default container;
