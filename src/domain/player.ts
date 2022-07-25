import { Color } from './types';

export default class Player {
  constructor(private readonly color: Color, private turn: boolean) {}

  get getColor() {
    return this.color;
  }

  get getTurn() {
    return this.turn;
  }

  protected set changeTurn(turn: boolean) {
    this.turn = turn;
  }

  passTurn(player: Player) {
    this.turn = !this.turn;
    player.turn = !player.turn;
  }
}
