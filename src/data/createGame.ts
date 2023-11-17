import seedrandom from "seedrandom";
import { createSector, Sector } from "./createSector";
import { Character } from "./domains/character/character";
import { DEFAULT_CHARACTER } from "./domains/character/defaults";
import {
  createShip,
  createShipArmor,
  createShipChassis,
  createShipComputer,
  createShipImpulseDrive,
  createShipPowerReactor,
  createShipShield,
  createShipWarpDrive,
  createShipWeapons,
} from "./domains/ship/createShip";
import { Ship } from "./domains/ship/ship";

export type GameState = {
  rng: seedrandom.PRNG;
  playerCharacter: Character;
  playerShip: Ship;
  currentScene: number;
  currentSector: number;
  sectors: Sector[];
};

const sector: Sector = createSector();

export const INITIAL_GAME_STATE: GameState = {
  rng: seedrandom("seed"),
  playerCharacter: {
    ...DEFAULT_CHARACTER,
  },
  playerShip: createShip({
    name: "Icterus",
    shipArmor: createShipArmor(),
    shipShieldGenerator: createShipShield(),
    shipWeapons: createShipWeapons(),
    shipChassis: createShipChassis(),
    shipComputer: createShipComputer(),
    shipImpulseDrive: createShipImpulseDrive(),
    shipWarpDrive: createShipWarpDrive(),
    shipPowerReactor: createShipPowerReactor(),
  }),
  currentScene: 0,
  currentSector: 0,
  sectors: [sector, sector, sector],
};
