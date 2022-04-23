import { BodyPartConstant } from "game/constants";
import { BodyType } from "arena_alpha_spawn_and_swamp/utilityTypes/bodyType";
import { CombatWorker } from "../CombatWorker";

type size = "small" | "medium" | "large";

export class MeleeWorker extends CombatWorker {
  public readonly size: size;

  public constructor(size: size) {
    let i = 0;
    if (size === "small") {
      i = 1;
    } else if (size === "medium") {
      i = 2;
    } else if (size === "large") {
      i = 3;
    }

    const bodyRecord: Record<BodyPartConstant, number> = {
      move: i,
      work: 0,
      carry: 0,
      attack: i,
      // eslint-disable-next-line camelcase
      ranged_attack: 0,
      tough: 0,
      heal: 0,
      claim: 0
    };
    const bodyType = new BodyType(bodyRecord);
    super("melee", bodyType);
    this.size = size;
  }
}
