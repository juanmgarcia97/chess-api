import Board from '../../src/domain/board';
import BlockingPiece from '../../src/domain/exceptions/blockingPiece';
import Game from '../../src/domain/game';
import Movement from '../../src/domain/movement';
import { Position } from '../../src/domain/position';

describe('Blocking Pieces Tests', () => {
  it('Should avoid move a rook over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('A', 1);
    const endPosition = new Position('A', 3);
    const movement = new Movement(startPosition, endPosition);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move a bishop over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('C', 1);
    const endPosition = new Position('A', 3);
    const movement = new Movement(startPosition, endPosition);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move the queen over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('D', 1);
    const endPosition = new Position('D', 3);
    const movement = new Movement(startPosition, endPosition);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move a pawn over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    let startPosition = new Position('A', 2);
    let endPosition = new Position('A', 4);
    let movement = new Movement(startPosition, endPosition);
    game.movePiece('White', movement);
    startPosition = new Position('A', 7);
    endPosition = new Position('A', 5);
    movement = new Movement(startPosition, endPosition);
    game.movePiece('Black', movement);
    startPosition = new Position('A', 4);
    endPosition = new Position('A', 5);
    movement = new Movement(startPosition, endPosition);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should let move the knight over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('B', 1);
    const endPosition = new Position('C', 3);
    const movement = new Movement(startPosition, endPosition);
    expect(game.movePiece('White', movement)).toBe(undefined);
  });
});
