import { NamedEntity } from "../common";
import { Ship, ShipPart } from "../ship/ship";

export type Reward = {
  experience: number;
  scrap: number;
  loot: ShipPart[];
};

export type Enemy = NamedEntity & {
  ship: Ship;
  reward: Reward;
};
