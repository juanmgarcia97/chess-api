import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class Queen extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Queen';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    const bishopMovement =
      Math.abs(this.position.getRank - position.getRank) ==
      Math.abs(
        this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
      );
    const rookMovement =
      this.position.getRank === position.getRank ||
      this.position.getFile.charCodeAt(0) === position.getFile.charCodeAt(0);
    if (this.equalPosition(position)) return false;
    return bishopMovement || rookMovement;
  }
}
