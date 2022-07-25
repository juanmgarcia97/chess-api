import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Pawn';
    this.alive = true;
  }
  canMoveTo(position: Position): boolean {
    const initialBlack = this.position.getRank === 7;
    const initialWhite = this.position.getRank === 2;
    const directionMove = this.getColor === 'Black' ? -1 : 1;
    const oneStepWhite =
      this.position.getRank + directionMove === position.getRank;
    const twoStepWhite =
      this.position.getRank + directionMove * 2 === position.getRank;
    const oneStepBlack =
      this.position.getRank + directionMove === position.getRank;
    const twoStepBlack =
      this.position.getRank + directionMove * 2 === position.getRank;

    return (
      this.position.getFile === position.getFile &&
      (oneStepBlack ||
        (initialBlack && twoStepBlack) ||
        oneStepWhite ||
        (initialWhite && twoStepWhite))
    );
  }
}
