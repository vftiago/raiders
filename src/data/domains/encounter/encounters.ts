import { createAutomatedDroneEnemy } from "../enemy/enemies";
import { EnemyEncounter } from "./encounter";
import { v6 as uuidv6 } from "uuid";

export const singleAutomatedDrone: EnemyEncounter = {
  id: uuidv6(),
  name: "Signle Automated Drone",
  enemies: [createAutomatedDroneEnemy()],
};

export const doubleAutomatedDrone: EnemyEncounter = {
  id: uuidv6(),
  name: "Double Automated Drone",
  enemies: [createAutomatedDroneEnemy(), createAutomatedDroneEnemy()],
};
