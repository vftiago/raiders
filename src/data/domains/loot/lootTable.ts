import { addWeight, weighted } from "@lrkit/weighted";
import { Ship } from "../domains/ship/ship";
import { createShip } from "../domains/ship/createShip";
import { NamedEntity } from "../common";

const lootTable: (NamedEntity & Record<string, unknown>)[] = [
  {
    id: "gold",
    name: "Gold",
    description: "A pile of gold coins.",
    value: 100,
  },
  {
    id: "gem",
    name: "Gem",
    description: "A precious gemstone.",
    value: 500,
  },
];

export default weighted(addWeight(lootTable, 1));
