import { v6 as uuidv6 } from "uuid";
import { Ship } from "../ship/ship";
import { Enemy, Reward } from "./enemy";

export const createEnemy = ({ ship, reward }: { ship: Ship; reward: Reward }): Enemy => {
  return {
    id: uuidv6(),
    name: ship.name,
    ship,
    reward,
  };
};
