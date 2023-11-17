import { NamedEntity } from "../common";
import { Enemy } from "../enemy/enemy";

export type EnemyEncounter = NamedEntity & {
  enemies: Enemy[];
};
