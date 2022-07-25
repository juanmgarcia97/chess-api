import { Position } from '../../src/domain/position';
import Queen from '../../src/domain/queen';

describe('Queen Tests', () => {
  const queen = new Queen('White', new Position('D', 1));

  it('Should move vertically', () => {
    const position = new Position('D', 8);
    expect(queen.canMoveTo(position)).toBe(true);
  });

  it('Should move horizontally', () => {
    const position = new Position('A', 1);
    expect(queen.canMoveTo(position)).toBe(true);
  });

  it('Should move diagonally', () => {
    let position = new Position('H', 5);
    expect(queen.canMoveTo(position)).toBe(true);
    position = new Position('A', 4);
    expect(queen.canMoveTo(position)).toBe(true);
  });

  it('Should not move L', () => {
    let position = new Position('C', 3);
    expect(queen.canMoveTo(position)).toBe(false);
    position = new Position('E', 3);
    expect(queen.canMoveTo(position)).toBe(false);
  });

  it('Should not move other places', () => {
    let position = new Position('C', 5);
    expect(queen.canMoveTo(position)).toBe(false);
    position = new Position('F', 8);
    expect(queen.canMoveTo(position)).toBe(false);
  });

  it('Should not move to the same place', () => {
    const position = new Position('D', 1);
    expect(queen.canMoveTo(position)).toBe(false);
  });
});
