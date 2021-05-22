import { Scene } from "../types/scenes";

const scene: Scene = {
  id: "0",
  description:
    "You come upon a ship graveyard. Metal remains of ancient battleships float aimlessly in space. Maybe there is something worth salvaging, but there could be dangers lurking about.",
  options: [
    { text: "Let's see what we can find.", linkTo: "1" },
    { text: "Better avoid unecessary risks.", linkTo: "2" },
  ],
};
