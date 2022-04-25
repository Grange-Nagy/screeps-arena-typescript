import { CombatWorker } from "arena_alpha_spawn_and_swamp/workers/CombatWorker";
import { makeBody } from "arena_alpha_spawn_and_swamp/utilityTypes/BodyType";

export const SmallMeleeWorker: CombatWorker = {
  name: "SmallMeleeWorker",
  bodyType: makeBody({
    attack: 1,
    move: 1
  }),
  categories: ["combat"],
  attackType: "melee"
};
