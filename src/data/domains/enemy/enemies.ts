import { addWeight, weighted } from "@lrkit/weighted";
import { automatedDrone } from "../ship/ships";
import { createEnemy } from "./createEnemy";
import { EnemyType } from "./enemy";
import { DEFAULT_MISSILE_AMMO } from "../ship/defaults";

const commonLoot = [
  [
    {
      item: DEFAULT_MISSILE_AMMO,
      quantity: 1,
    },
    null,
  ],
];

const uncommonLoot = [
  [
    {
      item: DEFAULT_MISSILE_AMMO,
      quantity: 2,
    },
  ],
];

const rareLoot = [
  [
    {
      item: DEFAULT_MISSILE_AMMO,
      quantity: 3,
    },
  ],
];

const weightedLootTable = weighted([
  ...addWeight(commonLoot, 3),
  ...addWeight(uncommonLoot, 1),
  ...addWeight(rareLoot, 1),
]);

export const createAutomatedDroneEnemy = () => {
  return createEnemy({
    entity: automatedDrone,
    type: EnemyType.MECHANICAL,
    reward: {
      experience: 100,
      scrap: 50,
      weightedLootTable,
    },
  });
};
