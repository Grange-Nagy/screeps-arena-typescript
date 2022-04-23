import { BodyPartConstant } from "game/constants";

const BODYPART_COST: Record<BodyPartConstant, number> = {
  move: 50,
  work: 100,
  attack: 80,
  carry: 50,
  heal: 250,
  // eslint-disable-next-line camelcase
  ranged_attack: 150,
  tough: 10,
  claim: 600
};

export class BodyType {
  public readonly partRecord: Record<BodyPartConstant, number> = {
    move: 0,
    work: 0,
    carry: 0,
    attack: 0,
    // eslint-disable-next-line camelcase
    ranged_attack: 0,
    tough: 0,
    heal: 0,
    claim: 0
  };
  public readonly spawnArray: BodyPartConstant[] = [];
  public readonly cost = 0;
  public readonly burdenedSpeed: number;
  public readonly unburdenedSpeed: number;

  public constructor(bodyRecord: Record<BodyPartConstant, number>) {
    this.partRecord = bodyRecord;
    let partSum = 0;
    for (const part in bodyRecord) {
      const partReal = part as BodyPartConstant;
      const count = bodyRecord[partReal];
      this.cost += BODYPART_COST[partReal] * count;
      partSum += count;
      for (let i = 0; i < count; i++) {
        this.spawnArray.push(partReal);
      }
    }

    partSum -= this.partRecord.move;
    this.burdenedSpeed = 1 / Math.ceil(partSum / this.partRecord.move);

    partSum -= this.partRecord.carry;

    if (partSum === 0) {
      this.unburdenedSpeed = 1;
    } else {
      this.unburdenedSpeed = 1 / Math.ceil(partSum / this.partRecord.move);
    }
  }
}
