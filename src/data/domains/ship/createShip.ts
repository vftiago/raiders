import { v6 as uuid } from "uuid";

import {
  DEFAULT_ENERGY_WEAPON,
  DEFAULT_KINETIC_WEAPON,
  DEFAULT_MISSILE_WEAPON,
  DEFAULT_SHIP_ARMOR,
  DEFAULT_SHIP_CHASSIS,
  DEFAULT_SHIP_COMPUTER,
  DEFAULT_SHIP_IMPULSE_DRIVE,
  DEFAULT_SHIP_POWER_REACTOR,
  DEFAULT_SHIP_SHIELD,
  DEFAULT_SHIP_WARP_DRIVE,
} from "./defaults";

import {
  Ship,
  ShipArmor,
  ShipChassis,
  ShipComputer,
  ShipEnergyWeapon,
  ShipImpulseDrive,
  ShipKineticWeapon,
  ShipMissileWeapon,
  ShipPowerReactor,
  ShipShieldGenerator,
  ShipWarpDrive,
  ShipWeapon,
} from "./ship";

export const createShipChassis = (shipChassis?: Partial<ShipChassis>): ShipChassis => {
  return {
    ...DEFAULT_SHIP_CHASSIS,
    id: uuid(),
    ...shipChassis,
  };
};

export const createShipEnergyWeapon = (shipWeapon?: Partial<ShipEnergyWeapon>): ShipEnergyWeapon => {
  return {
    ...DEFAULT_ENERGY_WEAPON,
    id: uuid(),
    ...shipWeapon,
  };
};

export const createShipKineticWeapon = (shipWeapon?: Partial<ShipKineticWeapon>): ShipKineticWeapon => {
  return {
    ...DEFAULT_KINETIC_WEAPON,
    id: uuid(),
    ...shipWeapon,
  };
};

export const createShipMissileWeapon = (shipWeapon?: Partial<ShipMissileWeapon>): ShipMissileWeapon => {
  return {
    ...DEFAULT_MISSILE_WEAPON,
    id: uuid(),
    ...shipWeapon,
  };
};

export const createShipWeapons = (shipWeapons?: ShipWeapon[]): ShipWeapon[] => {
  return shipWeapons ? shipWeapons : [createShipEnergyWeapon(), createShipKineticWeapon(), createShipMissileWeapon()];
};

export const createShipArmor = (shipArmor?: Partial<ShipArmor>): ShipArmor => {
  return {
    ...DEFAULT_SHIP_ARMOR,
    id: uuid(),
    ...shipArmor,
  };
};

export const createShipShield = (shipShieldGenerator?: Partial<ShipShieldGenerator>): ShipShieldGenerator => {
  return {
    ...DEFAULT_SHIP_SHIELD,
    id: uuid(),
    ...shipShieldGenerator,
  };
};

export const createShipComputer = (shipComputer?: Partial<ShipComputer>): ShipComputer => {
  return {
    ...DEFAULT_SHIP_COMPUTER,
    id: uuid(),
    ...shipComputer,
  };
};

export const createShipImpulseDrive = (shipImpulseEngine?: Partial<ShipImpulseDrive>): ShipImpulseDrive => {
  return {
    ...DEFAULT_SHIP_IMPULSE_DRIVE,
    id: uuid(),
    ...shipImpulseEngine,
  };
};

export const createShipWarpDrive = (shipWarpDrive?: Partial<ShipWarpDrive>): ShipWarpDrive => {
  return {
    ...DEFAULT_SHIP_WARP_DRIVE,
    id: uuid(),
    ...shipWarpDrive,
  };
};

export const createShipPowerReactor = (shipPowerReactor?: Partial<ShipPowerReactor>): ShipPowerReactor => {
  return {
    ...DEFAULT_SHIP_POWER_REACTOR,
    id: uuid(),
    ...shipPowerReactor,
  };
};

export const createShip = (ship: Omit<Ship, "id">): Ship => {
  return {
    id: uuid(),
    ...ship,
  };
};
