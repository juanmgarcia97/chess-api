import Board from '../../../domain/board';
import Game from '../../../domain/game';
import GameEntity from '../entities/game.entity';

export default class GameMapper {
  public static toGameDomain(entity: GameEntity): Game {
    const gameDomain = new Game(new Board());
    gameDomain.setGameId = entity.gameId;
    gameDomain.setBoard = entity.board;
    gameDomain.setPlayer1 = entity.player1;
    gameDomain.setPlayer2 = entity.player2;
    gameDomain.setState = entity.state;
    gameDomain.setTurn = entity.turn;
    return gameDomain;
  }

  public static toGamePersistence(game: Game): GameEntity {
    const gameEntity = new GameEntity();
    gameEntity.board = game.getBoard;
    gameEntity.gameId = game.getGameId;
    gameEntity.player1 = game.getPlayer1;
    gameEntity.player2 = game.getPlayer2;
    gameEntity.state = game.getState;
    gameEntity.turn = game.getTurn;
    return gameEntity;
  }
}
