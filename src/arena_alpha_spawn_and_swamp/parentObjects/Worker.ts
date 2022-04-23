import { BodyType } from "arena_alpha_spawn_and_swamp/utilityTypes/bodyType";
import { CombatWorkerCategories } from "arena_alpha_spawn_and_swamp/workers/CombatWorker";

export type WorkerCategories =
  | "combat"
  | "upgrader"
  | "builder"
  | "miner"
  | "hauler"
  | "scout"
  | CombatWorkerCategories;

export abstract class Worker {
  public readonly categories: string[];
  public readonly bodyType: BodyType;

  public constructor(categories: WorkerCategories[], bodyType: BodyType) {
    this.categories = categories;
    this.bodyType = bodyType;
  }
}
