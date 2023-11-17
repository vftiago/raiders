import { ReactNode } from "react";

type Entity = {
  id: string;
};

type CharacterRequirement =
  | {
      stat: string;
      value: number;
    }
  | {
      perk: string;
      value: boolean;
    }
  | {
      trait: string;
      value: boolean;
    };

type ItemRequirement = {
  item: string;
  quantity: number;
};

type StateRequirement = {
  state: string;
  status: boolean;
};

export type Effect =
  | {
      stat: string;
      value: number;
    }
  | {
      perk: string;
      value: boolean;
    }
  | {
      trait: string;
      value: boolean;
    };

export type Requirement = CharacterRequirement | ItemRequirement | StateRequirement;

export type SceneOption = {
  effects?: Effect[];
  requirements?: Requirement[];
  text: string;
  next: string;
};

export type SceneParagraph = {
  id: string;
  description: ReactNode[];
  options: SceneOption[];
};

export type Scene = Entity & {
  title: string;
  narrative: SceneParagraph[];
};

const sceneTable: Map<string, Scene> = new Map();

sceneTable.set("0", {
  id: "0",
  title: "Silence",
  narrative: [
    {
      id: "0",
      description: [
        "Nothing of note registers on the ships intruments once you arrive at your destination.",
        "Looking outside the windows you see nothing but black. You are surrounded by the emptyness of space.",
      ],
      options: [
        { text: "Let's get out of here.", next: "end" },
        {
          requirements: [
            { trait: "anxious", value: true },
            { trait: "anxious", value: true },
          ],
          text: "You sense something is amiss...",
          next: "end",
        },
      ],
    },
  ],
});

export default sceneTable;
