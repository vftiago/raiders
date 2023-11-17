import { Enemy } from "./enemy/enemy";

export type Entity = {
  id: string;
};

export type Named = {
  name: string;
};

export type NamedEntity = Entity & Named;

export type CombatActor = Enemy & {
  currentAcceleration: 0;
  currentPowerConsumption: 0;
  currentWeight: 0;
};
