import Board from '../../src/domain/board';
import Game from '../../src/domain/game';
import Movement from '../../src/domain/movement';
import { Position } from '../../src/domain/position';

describe('Capture Tests', () => {
  it('Should let a black piece kill a white one', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 4);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('E', 7);
    end = new Position('E', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('H', 2);
    end = new Position('H', 4);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 8);
    end = new Position('H', 4);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    expect(game.getBoard.getBoard.some((piece) => !piece.isAlive)).toBe(true);
  });

  it('Should avoid pawn to kill moving forward', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 4);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 7);
    end = new Position('D', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('D', 4);
    end = new Position('D', 5);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    expect(game.getBoard.getBoard.some((piece) => !piece.isAlive)).toBe(false);
  });

  it('Should let pawn to kill moving diagonally', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 4);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('E', 7);
    end = new Position('E', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('D', 4);
    end = new Position('E', 5);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    expect(game.getBoard.getBoard.some((piece) => !piece.isAlive)).toBe(true);
  });
});
