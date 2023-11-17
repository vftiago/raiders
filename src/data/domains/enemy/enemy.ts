import { WeightedTable } from "@lrkit/weighted/src/types";
import { NamedEntity } from "../common";
import { Ship, ShipAmmo, ShipPart } from "../ship/ship";

export type Loot = {
  item: ShipPart | ShipAmmo;
  quantity: number;
};

export type Reward = {
  experience: number;
  scrap: number;
  weightedLootTable: WeightedTable<(Loot | null)[]>;
};

export enum EnemyType {
  MECHANICAL = "mechanical",
  ORGANIC = "organic",
}

export enum EnemyCondition {
  DAMAGED = "damaged",
  STRONG = "strong",
}

export type MechanicalEnemy = NamedEntity & {
  type: EnemyType.MECHANICAL;
  ship: Ship;
  reward: Reward;
};

export type OrganicEnemy = NamedEntity & {
  type: EnemyType.ORGANIC;
  ship: Ship;
  reward: Reward;
};

export type Enemy = MechanicalEnemy | OrganicEnemy;
