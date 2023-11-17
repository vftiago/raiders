import {
  createShip,
  createShipChassis,
  createShipComputer,
  createShipImpulseDrive,
  createShipPowerReactor,
  createShipWarpDrive,
  createShipWeapons,
} from "./createShip";

export const automatedDrone = createShip({
  name: "Automated Drone",
  shipWeapons: createShipWeapons(),
  shipChassis: createShipChassis(),
  shipComputer: createShipComputer(),
  shipImpulseDrive: createShipImpulseDrive(),
  shipWarpDrive: createShipWarpDrive(),
  shipPowerReactor: createShipPowerReactor(),
});

export const pirateRaider = createShip({
  name: "Pirate Raider",
  shipWeapons: createShipWeapons(),
  shipChassis: createShipChassis(),
  shipComputer: createShipComputer(),
  shipImpulseDrive: createShipImpulseDrive(),
  shipWarpDrive: createShipWarpDrive(),
  shipPowerReactor: createShipPowerReactor(),
});

// not a ship? maybe i need to create a new domain for this
export const spaceMosquito = createShip({
  name: "Space Mosquito",
  shipWeapons: createShipWeapons(),
  shipChassis: createShipChassis(),
  shipComputer: createShipComputer(),
  shipImpulseDrive: createShipImpulseDrive(),
  shipWarpDrive: createShipWarpDrive(),
  shipPowerReactor: createShipPowerReactor(),
});
