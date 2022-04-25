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

export function makeBody(partialBodyRecord: Partial<Record<BodyPartConstant, number>>) {
  let partSum = 0;
  const partStrArray: BodyPartConstant[] = [];
  const bt = {} as Body;
  bt.move = 0;
  bt.work = 0;
  bt.carry = 0;
  bt.attack = 0;
  // eslint-disable-next-line camelcase
  bt.ranged_attack = 0;
  bt.tough = 0;
  bt.heal = 0;
  bt.claim = 0;
  bt.cost = 0;
  for (const part in partialBodyRecord) {
    const partReal = part as BodyPartConstant;
    const count = partialBodyRecord[partReal];
    if (count !== undefined) {
      bt[partReal] = count;
      bt.cost += BODYPART_COST[partReal] * count;
      partSum += count;
      for (let i = 0; i < count; i++) {
        partStrArray.push(partReal);
      }
    }
  }

  partSum -= bt.move;
  bt.burdenedSpeed = 1 / Math.ceil(partSum / bt.move);

  partSum -= bt.carry;

  if (partSum === 0) {
    bt.unburdenedSpeed = 1;
  } else {
    bt.unburdenedSpeed = 1 / Math.ceil(partSum / bt.move);
  }
  bt.spawnArray = partStrArray;
  return bt as Readonly<Body>;
}

export type Body = {
  move: number;
  work: number;
  carry: number;
  attack: number;
  // eslint-disable-next-line camelcase
  ranged_attack: number;
  tough: number;
  heal: number;
  claim: number;

  spawnArray: BodyPartConstant[];
  cost: number;

  burdenedSpeed: number;
  unburdenedSpeed: number;
};
