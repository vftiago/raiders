import encounterTable from "./events/encounterTable";
import { SceneType } from "./events/eventTable";

export const createCombatScene = () => {
  return {
    id: "0",
    name: "Fight!",
    type: SceneType.COMBAT as const,
    enemies: encounterTable.pick(),
    combatLog: [],
  };
};
