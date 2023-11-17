import { createAutomatedDroneEnemy } from "../enemy/enemies";
import { createEnemyEncounter } from "./createEncounter";
import { EnemyEncounter } from "./encounter";

export const singleAutomatedDrone: EnemyEncounter = createEnemyEncounter({
  name: "Signle Automated Drone",
  enemies: [createAutomatedDroneEnemy()],
});

export const doubleAutomatedDrone: EnemyEncounter = createEnemyEncounter({
  name: "Double Automated Drone",
  enemies: [createAutomatedDroneEnemy(), createAutomatedDroneEnemy()],
});
