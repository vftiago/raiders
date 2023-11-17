import { v6 as uuid } from "uuid";
import { Ship } from "../ship/ship";
import { Enemy, EnemyType, Reward } from "./enemy";

export const createEnemy = ({ entity, type, reward }: { entity: Ship; type: EnemyType; reward: Reward }): Enemy => {
  return {
    id: uuid(),
    type,
    name: entity.name,
    ship: entity,
    reward,
  };
};
