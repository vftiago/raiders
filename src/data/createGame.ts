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
  log: {
    latest: string[];
    complete: string[];
  };
  rng: seedrandom.PRNG;
  playerCharacter: Character;
  playerShip: Ship;
  currentSceneIndex: number;
  currentSectorIndex: number;
  sectors: Sector[];
};

const sector: Sector = createSector();

export const INITIAL_GAME_STATE: GameState = {
  log: {
    latest: [],
    complete: [],
  },
  // the game state should only store the seed
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
  currentSceneIndex: 0,
  currentSectorIndex: 0,
  sectors: [sector, sector, sector],
};
