import { v6 as uuidv6 } from "uuid";
import { Ship } from "../ship/ship";
import { Enemy, EnemyType, Reward } from "./enemy";

export const createEnemy = ({ entity, type, reward }: { entity: Ship; type: EnemyType; reward: Reward }): Enemy => {
  return {
    id: uuidv6(),
    type,
    name: entity.name,
    ship: entity,
    reward,
  };
};
