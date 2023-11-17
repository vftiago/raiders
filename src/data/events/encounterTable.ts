import { addWeight, weighted } from "@lrkit/weighted";
import { EnemyEncounter } from "../domains/encounter/encounter";
import { doubleAutomatedDrone, singleAutomatedDrone } from "../domains/encounter/encounters";

const encounters: EnemyEncounter[] = [singleAutomatedDrone, doubleAutomatedDrone];

export const weightedEncounterTable = weighted(addWeight(encounters, 1));
