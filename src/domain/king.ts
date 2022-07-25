import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'King';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    const oneStep = 1;
    return (
      Math.abs(this.position.getRank - position.getRank) <= oneStep &&
      Math.abs(
        this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
      ) <= oneStep &&
      !this.equalPosition(position)
    );
  }
}
