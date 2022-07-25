import Board from './board';
import Player from './player';
import { Color, State } from './types';
import KingExposed from './exceptions/kingExposed';
import InvalidTurn from './exceptions/invalidTurn';
import Movement from './movement';
import { v4 as uuidv4 } from 'uuid';

export default class Game {
  private gameId: string;
  private player1: Player;
  private player2: Player;
  private turn: Color;
  private state: State;
  private board: Board;

  constructor(board: Board) {
    this.gameId = uuidv4();
    this.state = 'Ready';
    this.turn = 'White';
    this.player1 = new Player('Black', false);
    this.player2 = new Player('White', true);
    this.board = board;
  }

  get getGameId(): string {
    return this.gameId;
  }

  set setGameId(id: string) {
    this.gameId = id;
  }

  get getPlayer1(): Player {
    return this.player1;
  }

  set setPlayer1(player: Player) {
    this.player1 = player;
  }

  get getPlayer2(): Player {
    return this.player2;
  }

  set setPlayer2(player: Player) {
    this.player2 = player;
  }

  get getTurn(): Color {
    return this.turn;
  }

  set setTurn(turn: Color) {
    this.turn = turn;
  }

  get getState(): State {
    return this.state;
  }

  set setState(state: State) {
    this.state = state;
  }

  get getBoard(): Board {
    return this.board;
  }

  set setBoard(board: Board) {
    this.board = board;
  }

  get status() {
    return this;
  }

  private changeTurn() {
    if (this.turn === 'White') {
      this.turn = 'Black';
      this.player1.passTurn(this.player2);
    } else {
      this.turn = 'White';
      this.player2.passTurn(this.player1);
    }
  }

  private checkRightTurn(turn: Color): void {
    if (turn !== this.turn) throw new InvalidTurn();
  }

  private isKingInDanger(turn: Color, movement: Movement): void {
    if (this.board.isKingInDanger(turn, movement)) throw new KingExposed();
  }

  movePiece(turn: Color, movement: Movement) {
    this.checkRightTurn(turn);
    this.isKingInDanger(turn, movement);
    this.board.movePiece(turn, movement);
    this.changeTurn();
    if (this.state === 'Ready') this.state = 'Playing';
  }
}
