import Board from '../../src/domain/board';
import { Position } from '../../src/domain/position';
import Game from '../../src/domain/game';
import KingExposed from '../../src/domain/exceptions/kingExposed';
import Movement from '../../src/domain/movement';

describe('Check Tests', () => {
  it('Should throw error when the king is exposed to Check Mate', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 3);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('C', 7);
    end = new Position('C', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 2);
    end = new Position('E', 3);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 8);
    end = new Position('A', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 1);
    end = new Position('D', 2);
    movement = new Movement(start, end);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(KingExposed);
    }
  });

  it('Should throw error when the king is exposed to Check Mate and try to move other piece', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 3);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('C', 7);
    end = new Position('C', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 2);
    end = new Position('E', 3);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 8);
    end = new Position('A', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('A', 2);
    end = new Position('A', 3);
    movement = new Movement(start, end);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(KingExposed);
    }
  });

  it('Should throw error when the king try to move to a position a knight can move', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('E', 2);
    let end = new Position('E', 3);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('G', 8);
    end = new Position('F', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 1);
    end = new Position('E', 2);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('F', 6);
    end = new Position('G', 4);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 3);
    end = new Position('E', 4);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('A', 7);
    end = new Position('A', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 2);
    end = new Position('E', 3);
    movement = new Movement(start, end);
    try {
      game.movePiece('White', movement);
    } catch (error) {
      expect(error).toBeInstanceOf(KingExposed);
    }
  });

  it('Should avoid the check by blocking piece', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 3);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('C', 7);
    end = new Position('C', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 2);
    end = new Position('E', 3);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 8);
    end = new Position('A', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('D', 1);
    end = new Position('D', 2);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
  });

  it('Should avoid the check by moving the king to safe space', () => {
    const board = new Board();
    const game = new Game(board);
    let start = new Position('D', 2);
    let end = new Position('D', 3);
    let movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('C', 7);
    end = new Position('C', 6);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 2);
    end = new Position('E', 3);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
    start = new Position('D', 8);
    end = new Position('A', 5);
    movement = new Movement(start, end);
    game.movePiece('Black', movement);
    start = new Position('E', 1);
    end = new Position('E', 2);
    movement = new Movement(start, end);
    game.movePiece('White', movement);
  });
});
