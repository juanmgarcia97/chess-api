import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Rook';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    if (this.equalPosition(position)) return false;
    return (
      this.position.getRank === position.getRank ||
      this.position.getFile.charCodeAt(0) === position.getFile.charCodeAt(0)
    );
  }
}
