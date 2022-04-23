import { BodyType } from "arena_alpha_spawn_and_swamp/utilityTypes/bodyType";
import { Worker } from "../parentObjects/Worker";

export type CombatWorkerCategories = "melee" | "ranged" | "healer";

export abstract class CombatWorker extends Worker {
  public constructor(role: CombatWorkerCategories, bodyType: BodyType) {
    super(["combat", role], bodyType);
  }
}
