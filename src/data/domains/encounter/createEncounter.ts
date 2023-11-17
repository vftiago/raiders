import { v6 as uuid } from "uuid";
import { Enemy } from "../enemy/enemy";
import { EnemyEncounter } from "./encounter";

export const createEnemyEncounter = ({ name, enemies }: { name: string; enemies: Enemy[] }): EnemyEncounter => {
  return {
    id: uuid(),
    name,
    enemies,
  };
};
