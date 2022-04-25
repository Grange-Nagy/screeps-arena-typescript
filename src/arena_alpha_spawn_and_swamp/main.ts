import { Creep, StructureSpawn } from "game/prototypes";
import { SmallMeleeWorker } from "./workers/CombatWorkers/MeleeWorker";
import { getObjectsByPrototype } from "game/utils";

let attacker: Creep | undefined;
export function loop(): void {
  if (!attacker) {
    const mySpawn = getObjectsByPrototype(StructureSpawn).find(i => i.my);
    if (mySpawn) {
      attacker = mySpawn.spawnCreep(SmallMeleeWorker.bodyType.spawnArray).object;
    }
  } else {
    const enemySpawn = getObjectsByPrototype(StructureSpawn).find(i => !i.my);
    if (enemySpawn) {
      attacker.moveTo(enemySpawn);
      attacker.attack(enemySpawn);
      console.log(attacker.id, "attacking", enemySpawn.id);
    }
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
}
