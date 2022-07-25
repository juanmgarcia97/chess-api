import { Column, Entity, PrimaryColumn } from 'typeorm';
import Board from '../../../domain/board';
import Player from '../../../domain/player';
import { Color, State } from '../../../domain/types';

@Entity()
export default class GameEntity {
  @PrimaryColumn()
  gameId: string;

  @Column({ type: 'json' })
  player1: Player;

  @Column({ type: 'json' })
  player2: Player;

  @Column({ type: 'varchar' })
  turn: Color;

  @Column({ type: 'varchar' })
  state: State;

  @Column({ type: 'json' })
  board: Board;
}
