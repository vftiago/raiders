import { createCombatScene } from "./createCombatScene";
import { createEventScene } from "./createEventScene";
import { GameCombat, GameEvent } from "./events/eventTable";

const SCENE_COUNT = 10;

export type GameScene = GameCombat | GameEvent;

export type Sector = {
  id: string;
  name: string;
  scenes: GameScene[];
};

export const createSector = (): Sector => {
  const scenes: GameScene[] = [];

  for (let i = 0; i < SCENE_COUNT; i++) {
    if (i % 2 !== 0) {
      scenes.push(createEventScene());
    } else {
      scenes.push(createCombatScene());
    }
  }

  return {
    id: "0",
    name: "Sector",
    scenes,
  };
};
