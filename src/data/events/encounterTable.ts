import { addWeight, weighted } from "@lrkit/weighted";
import { Enemy } from "../domains/enemy/enemy";
import { createEnemy } from "../domains/enemy/createEnemy";
import { automatedDrone } from "../domains/ship/shipTable";

// enemies need ids as well

const encounters: Enemy[][] = [
  [
    createEnemy({
      ship: automatedDrone,
      reward: {
        experience: 100,
        scrap: 50,
        loot: [],
      },
    }),
    createEnemy({
      ship: automatedDrone,
      reward: {
        experience: 150,
        scrap: 50,
        loot: [],
      },
    }),
  ],
];

export default weighted(addWeight(encounters, 1));
