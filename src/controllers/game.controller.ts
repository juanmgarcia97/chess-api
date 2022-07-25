import GameService from '../service/game.service.imp';
import express, { Request, Response, NextFunction } from 'express';
import Movement from '../domain/movement';
import container from '../../inversify.config';
import { Color, TYPES } from '../domain/types';
import { Position } from '../domain/position';
import Game from '../domain/game';
import InvalidGameId from '../domain/exceptions/invalidGameId';
import { validate as uuidValidate } from 'uuid';

const router = express.Router();

const gameService: GameService = container.get<GameService>(TYPES.GameService);

router.get('/', async (request: Request, response: Response) => {
  const gameStatus = gameService.initGame();
  response.send({
    message: 'Game created correctly and ready to play',
    body: gameStatus,
  });
});

router.get(
  '/status',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const gameStatus = gameService.getGameStatus();
      response.send(gameStatus);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/move',
  async (request: Request, response: Response, next: NextFunction) => {
    const playerMove = await request.body;
    const turn: Color = playerMove.turn;
    const startPosition: Position = new Position(
      playerMove.start.file,
      playerMove.start.rank
    );
    const endPosition: Position = new Position(
      playerMove.end.file,
      playerMove.end.rank
    );
    const movement: Movement = new Movement(startPosition, endPosition);
    try {
      gameService.movePiece(turn, movement);
      response.send({
        message: 'The piece has moved correctly',
        game: gameService.getGameStatus(),
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/reset',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      gameService.resetGame();
      response.send({
        message: 'Game reset',
        body: gameService.getGameStatus(),
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/save',
  async (request: Request, response: Response, next: NextFunction) => {
    const gameStatus: Game = gameService.getGameStatus();
    try {
      const game = await gameService.saveGame(gameStatus);
      response.send({
        message: 'Game saved successfully',
        body: game,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    try {
      if (!uuidValidate(id)) throw new InvalidGameId();
      const game = await gameService.loadGame(id);
      response.send({
        message: 'Game loaded successfully',
        body: game,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    try {
      await gameService.deleteGame(id);
      response.send({
        message: 'Game deleted successfully',
        gameId: id,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.all('*', () => {
  throw new Error('Page not found');
});

export default router;
