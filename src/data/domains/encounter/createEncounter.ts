import { v6 as uuidv6 } from "uuid";
import { Enemy } from "../enemy/enemy";
import { EnemyEncounter } from "./encounter";

export const createEnemyEncounter = ({ name, enemies }: { name: string; enemies: Enemy[] }): EnemyEncounter => {
  return {
    id: uuidv6(),
    name,
    enemies,
  };
};
