import { Position } from './position';

export default class Movement {
  constructor(private startPosition: Position, private endPosition: Position) {}

  get start(): Position {
    return this.startPosition;
  }

  get end(): Position {
    return this.endPosition;
  }

  get startFile(): string {
    return this.startPosition.getFile;
  }

  get startRank(): number {
    return this.startPosition.getRank;
  }

  get endFile(): string {
    return this.endPosition.getFile;
  }

  get endRank(): number {
    return this.endPosition.getRank;
  }

  get startFileNumber(): number {
    return this.startPosition.getFile.charCodeAt(0);
  }

  get endFileNumber(): number {
    return this.endPosition.getFile.charCodeAt(0);
  }
}
