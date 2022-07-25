import { Position } from '../../src/domain/position';
import Bishop from '../../src/domain/bishop';

describe('Bishop Tests', () => {
  const bishop = new Bishop('White', new Position('D', 1));

  it('Should move diagonally', () => {
    let position = new Position('H', 5);
    expect(bishop.canMoveTo(position)).toBe(true);
    position = new Position('A', 4);
    expect(bishop.canMoveTo(position)).toBe(true);
  });

  it('Should not move vertically', () => {
    const position = new Position('D', 8);
    expect(bishop.canMoveTo(position)).toBe(false);
  });

  it('Should not move horizontally', () => {
    let position = new Position('A', 1);
    expect(bishop.canMoveTo(position)).toBe(false);
  });

  it('Should not move L', () => {
    let position = new Position('C', 3);
    expect(bishop.canMoveTo(position)).toBe(false);
    position = new Position('E', 3);
    expect(bishop.canMoveTo(position)).toBe(false);
  });

  it('Should not move other places', () => {
    const position = new Position('C', 5);
    expect(bishop.canMoveTo(position)).toBe(false);
  });

  it('Should not move to the same place', () => {
    let position = new Position('D', 1);
    expect(bishop.canMoveTo(position)).toBe(false);
    position = new Position('F', 8);
    expect(bishop.canMoveTo(position)).toBe(false);
  });
});
