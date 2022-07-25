import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Knight';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    const possibleMoveDifference = 5;
    const horizontalMovement = Math.abs(
      this.position.getRank - position.getRank
    );
    const verticalMovement = Math.abs(
      this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
    );
    if (this.equalPosition(position)) return false;
    return (
      verticalMovement * verticalMovement +
        horizontalMovement * horizontalMovement ==
      possibleMoveDifference
    );
  }
}
