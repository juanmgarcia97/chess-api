import { Position } from '../../src/domain/position';
import Knight from '../../src/domain/knight';

describe('Knight Tests', () => {
  const knight = new Knight('White', new Position('D', 4));

  it('Should move L', () => {
    let position = new Position('C', 2);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('E', 2);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('B', 3);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('F', 3);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('B', 5);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('C', 6);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('E', 6);
    expect(knight.canMoveTo(position)).toBe(true);
    position = new Position('F', 5);
    expect(knight.canMoveTo(position)).toBe(true);
  });

  it('Should not move other places', () => {
    let position = new Position('A', 8);
    expect(knight.canMoveTo(position)).toBe(false);
    position = new Position('H', 1);
    expect(knight.canMoveTo(position)).toBe(false);
  });

  it('Should not move to the same place', () => {
    let position = new Position('D', 4);
    expect(knight.canMoveTo(position)).toBe(false);
  });

  it('Should not move vertically', () => {
    let position = new Position('D', 8);
    expect(knight.canMoveTo(position)).toBe(false);
  });

  it('Should not move horizontally', () => {
    let position = new Position('A', 1);
    expect(knight.canMoveTo(position)).toBe(false);
  });

  it('Should not move diagonally', () => {
    let position = new Position('H', 5);
    expect(knight.canMoveTo(position)).toBe(false);
    position = new Position('A', 4);
    expect(knight.canMoveTo(position)).toBe(false);
  });
});
