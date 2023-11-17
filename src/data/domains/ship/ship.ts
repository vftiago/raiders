import { NamedEntity } from "../common";

export enum ChassisType {
  FRIGATE = "frigate",
  DESTROYER = "destroyer",
  CRUISER = "cruiser",
  BATTLESHIP = "battleship",
  DREADNOUGHT = "dreadnought",
}

export enum WeaponType {
  KINETIC = "kinetic",
  ENERGY = "energy",
  MISSILE = "missile",
}

export type ShipChassis = NamedEntity & {
  type: ChassisType;
  maxhullIntegrity: number;
  currentHullIntegrity: number;
  pointDefenseWeaponMountCapacity: {
    [key in WeaponType]: number;
  } & {
    adaptive: number;
    totalCapacity: number;
  };
  weaponMountCapacity: {
    [key in WeaponType]: number;
  } & {
    adaptive: number;
    totalCapacity: number;
  };
  engineSlotCapacity: number;
  shieldSlotCapacity: number;
  armorWeightCapacity: number;
  cargoWeightCapacity: number;
  fuelCapacity: number;
  crewCapacity: number;
  cargoStorage: Array<unknown>;
};

type CommonWeaponAttributes = NamedEntity & {
  weaponWeight: number;
  rateOfFire: number;
  requiredPower: number;
};

export enum AmmoType {
  SHELL = "shell",
  MISSILE = "missile",
}

export type ShipEnergyWeapon = NamedEntity &
  CommonWeaponAttributes & {
    type: WeaponType.ENERGY;
    accuracy: number;
    damage: {
      min: number;
      max: number;
    };
  };

export type ShipKineticWeapon = NamedEntity &
  CommonWeaponAttributes & {
    type: WeaponType.KINETIC;
    accuracy: number;
    ammoType: AmmoType.SHELL;
    currentAmmo: ShipShellAmmo;
    currentAmmoCount: number;
    maxAmmo: number;
  };

export type ShipMissileWeapon = NamedEntity &
  CommonWeaponAttributes & {
    type: WeaponType.MISSILE;
    ammoType: AmmoType.MISSILE;
    currentAmmo: ShipMissileAmmo;
    currentAmmoCount: number;
    maxAmmo: number;
  };

export type ShipWeapon = ShipEnergyWeapon | ShipKineticWeapon | ShipMissileWeapon;

export type ShipShellAmmo = NamedEntity & {
  type: AmmoType.SHELL;
  damage: {
    min: number;
    max: number;
  };
};

export type ShipMissileAmmo = NamedEntity & {
  type: AmmoType.MISSILE;
  accuracy: number;
  damage: {
    min: number;
    max: number;
  };
  isHoming: boolean;
};

export type ShipArmor = NamedEntity & {
  currentArmorPoints: number;
  maxArmorPoints: number;
  armorWeight: number;
  armorResistance: number;
};

export type ShipShieldGenerator = NamedEntity & {
  requiredPower: number;
  currentShieldPoints: number;
  maxShieldPoints: number;
  shieldWeight: number;
  shieldResistance: number;
  shieldRechargeRate: number;
  shieldRechargeDelay: number;
  shieldRechargeEfficiency: number;
};

export enum FuelType {
  HYDROGEN = "hydrogen",
  HELIUM = "helium",
  OXYGEN = "oxygen",
  NITROGEN = "nitrogen",
  ARGON = "argon",
  CO2 = "carbon-dioxide",
  METHANE = "methane",
}

export type ShipTactic = NamedEntity & {
  accuracyBonus: number;
  evasionBonus: number;
  tacticRequiredPower: number;
};

export type ShipComputer = NamedEntity & {
  baseRequiredPower: number;
  energyWeaponAccuracyEfficiency: number;
  kineticWeaponAccuracyEfficiency: number;
  tactics: Array<ShipTactic>;
};

export type ShipImpulseDrive = NamedEntity & {
  engineWeight: number;
  maxImpulseSpeed: number;
  thrust: number;
  evasion: number;
  fuelConsumption: number;
  maxFuelCapacity: number;
  fuelEfficiency: number;
  fuelType: FuelType;
};

export type ShipWarpDrive = NamedEntity & {
  engineWeight: number;
  maxWarpSpeed: number;
  requiredCharge: number;
  currentCharge: number;
  fuelConsumption: number;
  fuelEfficiency: number;
  fuelType: FuelType;
  isCharged: boolean;
};

export type ShipPowerReactor = NamedEntity & {
  reactorWeight: number;
  powerOutput: number;
  fuelType: FuelType;
};

export type ShipPart = ShipShieldGenerator | ShipWeapon | ShipImpulseDrive | ShipWarpDrive | ShipPowerReactor;

export type ShipAmmo = ShipShellAmmo | ShipMissileAmmo;

export type Ship = NamedEntity & {
  shipChassis: ShipChassis;
  shipImpulseDrive: ShipImpulseDrive;
  shipWarpDrive: ShipWarpDrive;
  shipWeapons: ShipWeapon[];
  shipArmor?: ShipArmor;
  shipShieldGenerator?: ShipShieldGenerator;
  shipComputer: ShipComputer;
  shipPowerReactor: ShipPowerReactor;
};
