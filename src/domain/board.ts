import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Queen from './queen';
import Rook from './rook';
import Piece from './piece';
import { Position } from './position';
import { Color, NFile, Rank } from './types';
import InvalidPieceMovement from './exceptions/invalidPieceMovement';
import BlockingPiece from './exceptions/blockingPiece';
import Movement from './movement';
import PieceNotFound from './exceptions/pieceNotFound';
import MovingWrongPiece from './exceptions/movingWrongPiece';

export default class Board {
  private cells!: Piece[];

  constructor() {
    this.initBoard();
  }

  get getBoard() {
    return this.cells;
  }

  private initBoard(): void {
    this.cells = [];
    const minNumber = 1;
    const maxNumber = 8;
    for (let rank: Rank = minNumber; rank <= maxNumber; rank++) {
      for (let file: NFile = minNumber; file <= maxNumber; file++) {
        rank <= 2
          ? this.assignPieces(
              'White',
              new Position(file as NFile, rank as Rank)
            )
          : rank >= 7
          ? this.assignPieces(
              'Black',
              new Position(file as NFile, rank as Rank)
            )
          : false;
      }
    }
  }

  private assignPieces(color: Color, position: Position): void {
    const pieces = {
      1: Rook,
      2: Knight,
      3: Bishop,
      4: Queen,
      5: King,
      6: Bishop,
      7: Knight,
      8: Rook,
    };
    const pawns = {
      2: Pawn,
      7: Pawn,
    };
    position.getRank === 1
      ? this.cells.push(new pieces[position.getNFile](color, position))
      : position.getRank === 8
      ? this.cells.push(new pieces[position.getNFile](color, position))
      : false;
    position.getRank === 2
      ? this.cells.push(new pawns[position.getRank](color, position))
      : position.getRank === 7
      ? this.cells.push(new pawns[position.getRank](color, position))
      : false;
  }

  private findPiece(position: Position): Piece | undefined {
    return this.cells.find((piece) => piece.equalPosition(position));
  }

  private isPositionFree(position: Position): boolean {
    return !this.findPiece(position);
  }

  private getBiggestDifference(
    firstValue: number,
    secondValue: number
  ): number {
    return Math.max(Math.abs(firstValue), Math.abs(secondValue));
  }

  private getMovementDirection(movement: number): number {
    return movement > 0 ? -1 : movement < 0 ? 1 : 0;
  }

  private getFileDifference(movement: Movement): number {
    return movement.startFileNumber - movement.endFileNumber;
  }

  private getRankDifference(movement: Movement): number {
    return movement.startRank - movement.endRank;
  }

  isPieceBlockingToMove(movement: Movement): boolean {
    const fileDifference = this.getFileDifference(movement);
    const rankDifference = this.getRankDifference(movement);
    const biggestMove = this.getBiggestDifference(
      fileDifference,
      rankDifference
    );
    let isBlocking = false;
    for (let pivot = 1; pivot < biggestMove; pivot++) {
      const movingPosition = new Position(
        (movement.startFileNumber +
          pivot * this.getMovementDirection(fileDifference)) as NFile,
        (movement.startRank +
          pivot * this.getMovementDirection(rankDifference)) as Rank
      );
      if (!this.isPositionFree(movingPosition)) isBlocking = true;
    }
    return isBlocking;
  }

  isKingInDanger(color: Color, movement: Movement): boolean {
    const piece = this.findPiece(movement.start);
    if (!piece) throw new PieceNotFound();
    const oppositePieces = this.cells.filter(
      (piece) => piece.getColor !== color
    );
    return oppositePieces.some(
      (opposite) =>
        opposite.canMoveTo(movement.end) &&
        opposite.canMoveTo(movement.start) &&
        piece.getType === 'King'
    );
  }

  private verifyPieceExists(position: Position): Piece {
    const piece = this.findPiece(position);
    if (!piece) throw new PieceNotFound();
    return piece;
  }

  private verifyMovingRightPiece(turn: Color, piece: Piece) {
    if (piece.getColor !== turn) throw new MovingWrongPiece();
  }

  private verifyPieceCanMove(piece: Piece, position: Position): void {
    if (!piece.canMoveTo(position))
      throw new InvalidPieceMovement(piece.getType);
  }

  private verifyIfOtherPieceIsBlockingWay(
    piece: Piece,
    movement: Movement
  ): void {
    if (this.isPieceBlockingToMove(movement) && piece.getType !== 'Knight')
      throw new BlockingPiece();
  }

  private verifyKillOpponentPiece(piece: Piece, position: Position) {
    const opponentPiece = this.findPiece(position);
    if (!opponentPiece) return false;
    piece.getColor !== opponentPiece.getColor
      ? opponentPiece.pieceKilled()
      : false;
    return true;
  }

  movePiece(turn: Color, movement: Movement): void {
    const piece = this.verifyPieceExists(movement.start);
    this.verifyMovingRightPiece(turn, piece);
    this.verifyPieceCanMove(piece, movement.end);
    this.verifyIfOtherPieceIsBlockingWay(piece, movement);
    this.verifyKillOpponentPiece(piece, movement.end);
    piece.moveTo(movement.end);
  }
}
