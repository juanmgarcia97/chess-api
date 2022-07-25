import Pawn from '../../src/domain/pawn';
import { Position } from '../../src/domain/position';

describe('Pawn Tests', () => {
  const pawnInitial = new Pawn('White', new Position('A', 2));
  const pawn = new Pawn('Black', new Position('A', 6));

  it('Should move 1 or 2 steps when first moves', () => {
    let position = new Position('A', 3);
    expect(pawnInitial.canMoveTo(position)).toBe(true);
    position = new Position('A', 4);
    expect(pawnInitial.canMoveTo(position)).toBe(true);
  });

  it('Should move only 1 step when not initial move', () => {
    let position = new Position('A', 5);
    expect(pawn.canMoveTo(position)).toBe(true);
    position = new Position('A', 4);
    expect(pawn.canMoveTo(position)).toBe(false);
  });

  it('Should not move backwards', () => {
    const position = new Position('A', 7);
    expect(pawn.canMoveTo(position)).toBe(false);
  });

  it('Should not move horizontally', () => {
    const position = new Position('B', 6);
    expect(pawn.canMoveTo(position)).toBe(false);
  });

  it('Should not move diagonally', () => {
    const position = new Position('B', 5);
    expect(pawn.canMoveTo(position)).toBe(false);
  });

  it('Should not move L', () => {
    const position = new Position('B', 4);
    expect(pawn.canMoveTo(position)).toBe(false);
  });
});
