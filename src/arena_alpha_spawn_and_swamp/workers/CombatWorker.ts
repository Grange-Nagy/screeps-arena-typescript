import { Worker } from "../parentObjects/WorkerType";

export type CombatWorkerCategories = "melee" | "ranged" | "healer";

export type CombatWorker = Worker & {
  readonly attackType: CombatWorkerCategories;
};
