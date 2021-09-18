import { Scene } from "../../types/scene";

export const sceneTable: Map<string, Scene> = new Map();

sceneTable.set("0", {
  id: "0",
  title: "Ship Graveyard",
  weight: 1,
  narrative: [
    {
      id: "0",
      description:
        "You come upon a ship graveyard. Metal remains of ancient battleships float aimlessly in space. Maybe there is something worth salvaging, but there could be dangers lurking about.",
      options: [
        { text: "Let's see what we can find.", next: "1" },
        { text: "Better avoid unecessary risks.", next: "end" },
      ],
    },
    {
      id: "1",
      description: "You found metal scraps.",
      options: [{ text: "Let's get out of here.", next: "end" }],
    },
  ],
});

sceneTable.set("1", {
  id: "0",
  title: "Ship Graveyard 2",
  weight: 1,
  narrative: [
    {
      id: "0",
      description:
        "You come upon a ship graveyard. Metal remains of ancient battleships float aimlessly in space. Maybe there is something worth salvaging, but there could be dangers lurking about.",
      options: [
        { text: "Let's see what we can find.", next: "1" },
        { text: "Better avoid unecessary risks.", next: "end" },
      ],
    },
    {
      id: "1",
      description: "You found metal scraps.",
      options: [{ text: "Let's get out of here.", next: "end" }],
    },
  ],
});
