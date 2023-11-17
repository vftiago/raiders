import {
  AmmoType,
  ChassisType,
  FuelType,
  Ship,
  ShipArmor,
  ShipChassis,
  ShipComputer,
  ShipEnergyWeapon,
  ShipImpulseDrive,
  ShipKineticWeapon,
  ShipMissileAmmo,
  ShipMissileWeapon,
  ShipPowerReactor,
  ShipShellAmmo,
  ShipShieldGenerator,
  ShipWarpDrive,
  WeaponType,
} from "./ship";

export const DEFAULT_SHIP_CHASSIS: ShipChassis = {
  id: "default",
  name: "Frigate",
  type: ChassisType.FRIGATE,
  maxhullIntegrity: 50,
  currentHullIntegrity: 30,
  pointDefenseWeaponMountCapacity: {
    [WeaponType.ENERGY]: 0,
    [WeaponType.KINETIC]: 0,
    [WeaponType.MISSILE]: 0,
    adaptive: 1,
    totalCapacity: 1,
  },
  weaponMountCapacity: {
    [WeaponType.ENERGY]: 2,
    [WeaponType.KINETIC]: 2,
    [WeaponType.MISSILE]: 1,
    adaptive: 0,
    totalCapacity: 3,
  },
  engineSlotCapacity: 1,
  shieldSlotCapacity: 1,
  armorWeightCapacity: 1,
  cargoWeightCapacity: 1,
  fuelCapacity: 1,
  crewCapacity: 1,
  cargoStorage: [],
};

export const DEFAULT_ENERGY_WEAPON: ShipEnergyWeapon = {
  id: "default",
  name: "Basic Laser",
  type: WeaponType.ENERGY,
  damage: {
    min: 9,
    max: 11,
  },
  accuracy: 0.9,
  rateOfFire: 10,
  weaponWeight: 1,
  requiredPower: 80,
};

export const DEFAULT_SHELL_AMMO: ShipShellAmmo = {
  id: "default",
  name: "Basic Shell",
  type: AmmoType.SHELL,
  damage: {
    min: 1,
    max: 2,
  },
};

export const DEFAULT_MISSILE_AMMO: ShipMissileAmmo = {
  id: "default",
  name: "Basic Missile",
  type: AmmoType.MISSILE,
  accuracy: 0.75,
  isHoming: false,
  damage: {
    min: 25,
    max: 35,
  },
};

export const DEFAULT_KINETIC_WEAPON: ShipKineticWeapon = {
  id: "default",
  name: "Basic Railgun",
  type: WeaponType.KINETIC,
  ammoType: AmmoType.SHELL,
  rateOfFire: 1,
  currentAmmo: DEFAULT_SHELL_AMMO,
  currentAmmoCount: 12,
  maxAmmo: 12,
  accuracy: 0.7,
  weaponWeight: 1,
  requiredPower: 10,
};

export const DEFAULT_MISSILE_WEAPON: ShipMissileWeapon = {
  id: "default",
  name: "Basic Missile",
  type: WeaponType.MISSILE,
  ammoType: AmmoType.MISSILE,
  rateOfFire: 1,
  currentAmmo: DEFAULT_MISSILE_AMMO,
  currentAmmoCount: 2,
  maxAmmo: 2,
  weaponWeight: 1,
  requiredPower: 1,
};

export const DEFAULT_SHIP_SHIELD: ShipShieldGenerator = {
  id: "default",
  name: "Basic Shield",
  currentShieldPoints: 30,
  maxShieldPoints: 100,
  shieldWeight: 1,
  shieldResistance: 1,
  shieldRechargeRate: 1,
  shieldRechargeDelay: 1,
  shieldRechargeEfficiency: 1,
  requiredPower: 100,
};

export const DEFAULT_SHIP_IMPULSE_DRIVE: ShipImpulseDrive = {
  id: "default",
  name: "Basic Engine",
  maxImpulseSpeed: 1,
  thrust: 1,
  evasion: 0.05,
  fuelConsumption: 9,
  engineWeight: 1,
  maxFuelCapacity: 100,
  fuelEfficiency: 1,
  fuelType: FuelType.ARGON,
};

export const DEFAULT_SHIP_WARP_DRIVE: ShipWarpDrive = {
  id: "default",
  name: "Basic Warp Drive",
  engineWeight: 1,
  maxWarpSpeed: 1,
  currentCharge: 3,
  requiredCharge: 3,
  fuelConsumption: 1,
  fuelEfficiency: 1,
  isCharged: true,
  fuelType: FuelType.ARGON,
};

export const DEFAULT_SHIP_POWER_REACTOR: ShipPowerReactor = {
  id: "default",
  name: "Basic Reactor",
  powerOutput: 600,
  reactorWeight: 1,
  fuelType: FuelType.ARGON,
};

export const DEFAULT_SHIP_ARMOR: ShipArmor = {
  id: "default",
  name: "Basic Armor",
  currentArmorPoints: 90,
  maxArmorPoints: 100,
  armorWeight: 1,
  armorResistance: 1,
};

export const DEFAULT_SHIP_COMPUTER: ShipComputer = {
  id: "default",
  name: "Basic Computer",
  baseRequiredPower: 1,
  energyWeaponAccuracyEfficiency: 0.9,
  kineticWeaponAccuracyEfficiency: 0.5,
  tactics: [
    {
      id: "agressive",
      name: "Agressive",
      accuracyBonus: 0.1,
      evasionBonus: -0.1,
      tacticRequiredPower: 0.1,
    },
    {
      id: "neutral",
      name: "Neutral",
      accuracyBonus: 0.1,
      evasionBonus: 0,
      tacticRequiredPower: 0,
    },
    {
      id: "evasive",
      name: "Evasive",
      accuracyBonus: -0.1,
      evasionBonus: 0.2,
      tacticRequiredPower: 0.1,
    },
  ],
};

export const DEFAULT_PLAYER_SHIP: Ship = {
  id: "default-player-ship",
  name: "Icterus",
  shipChassis: {
    ...DEFAULT_SHIP_CHASSIS,
  },
  shipWeapons: [DEFAULT_KINETIC_WEAPON, DEFAULT_ENERGY_WEAPON, DEFAULT_MISSILE_WEAPON],
  shipArmor: DEFAULT_SHIP_ARMOR,
  shipShieldGenerator: DEFAULT_SHIP_SHIELD,
  shipComputer: DEFAULT_SHIP_COMPUTER,
  shipImpulseDrive: DEFAULT_SHIP_IMPULSE_DRIVE,
  shipWarpDrive: DEFAULT_SHIP_WARP_DRIVE,
  shipPowerReactor: DEFAULT_SHIP_POWER_REACTOR,
};

export const DEFAULT_ENEMY_SHIP: Ship = {
  id: "default-enemy-ship",
  name: "Pyrrhula",
  shipChassis: {
    ...DEFAULT_SHIP_CHASSIS,
  },
  shipWeapons: [DEFAULT_KINETIC_WEAPON],
  shipComputer: DEFAULT_SHIP_COMPUTER,
  shipImpulseDrive: DEFAULT_SHIP_IMPULSE_DRIVE,
  shipWarpDrive: DEFAULT_SHIP_WARP_DRIVE,
  shipPowerReactor: DEFAULT_SHIP_POWER_REACTOR,
};
