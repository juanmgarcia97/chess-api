import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class Bishop extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Bishop';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    if (this.equalPosition(position)) return false;
    return (
      Math.abs(this.position.getRank - position.getRank) ==
      Math.abs(
        this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
      )
    );
  }
}
