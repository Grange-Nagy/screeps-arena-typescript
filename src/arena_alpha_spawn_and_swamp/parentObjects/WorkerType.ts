import { Body } from "arena_alpha_spawn_and_swamp/utilityTypes/BodyType";
import { CombatWorkerCategories } from "arena_alpha_spawn_and_swamp/workers/CombatWorker";

export type WorkerCategories =
  | "combat"
  | "upgrader"
  | "builder"
  | "miner"
  | "hauler"
  | "scout"
  | CombatWorkerCategories;

export type Worker = {
  readonly name: string;
  readonly categories: WorkerCategories[];
  readonly bodyType: Body;
};
