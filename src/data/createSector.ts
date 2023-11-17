import { weightedEncounterTable } from "./scenes/encounterTable";
import { GameCombat, GameEvent, SceneType, weightedEventNarrativeTable } from "./scenes/eventTable";

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
    if (i % 2 === 0) {
      scenes.push({
        type: SceneType.EVENT,
        eventNarrative: weightedEventNarrativeTable.pick(),
      });
    } else {
      scenes.push({
        type: SceneType.COMBAT,
        enemyEncounter: weightedEncounterTable.pick(),
      });
    }
  }

  return {
    id: "0",
    name: "Sector",
    scenes,
  };
};
