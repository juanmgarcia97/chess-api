import King from '../../src/domain/king';
import { Position } from '../../src/domain/position';

describe('King Tests', () => {
  const king = new King('White', new Position('D', 4));

  it('Should move one place forward', () => {
    let position = new Position('D', 5);
    expect(king.canMoveTo(position)).toBe(true);
  });

  it('Should move one place to the left', () => {
    let position = new Position('C', 4);
    expect(king.canMoveTo(position)).toBe(true);
  });

  it('Should move one place to the right', () => {
    let position = new Position('E', 4);
    expect(king.canMoveTo(position)).toBe(true);
  });

  it('Should move one place to the right', () => {
    let position = new Position('D', 3);
    expect(king.canMoveTo(position)).toBe(true);
  });

  it('Should not move more than one place', () => {
    let position = new Position('D', 2);
    expect(king.canMoveTo(position)).toBe(false);
  });

  it('Should not move to the same place', () => {
    let position = new Position('D', 4);
    expect(king.canMoveTo(position)).toBe(false);
  });
});
