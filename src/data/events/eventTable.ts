import { ReactNode } from "react";
import { weighted, addWeight } from "@lrkit/weighted";
import { NamedEntity } from "../domains/common";
import { Enemy } from "../domains/enemy/enemy";

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

export type EventOption = {
  effects?: Effect[];
  requirements?: Requirement[];
  text: string;
  next: string;
};

export type EventParagraph = {
  id: string;
  description: ReactNode[];
  options: EventOption[];
};

export enum SceneType {
  COMBAT = "combat",
  EVENT = "event",
}

export type GameCombat = NamedEntity & {
  type: SceneType.COMBAT;
  enemies: Enemy[];
  combatLog: string[];
};

export type GameEvent = NamedEntity & {
  type: SceneType.EVENT;
  narrative: EventParagraph[];
};

const events: GameEvent[] = [
  {
    id: "0",
    name: "Silence",
    type: SceneType.EVENT,
    narrative: [
      {
        id: "0",
        description: [
          "Nothing of note registers on the ship's intruments once you arrive at your destination.",
          "Looking outside the windows you see nothing but black. You are surrounded by the emptyness of space.",
        ],
        options: [
          { text: "Let's get out of here.", next: "end" },
          { requirements: [{ stat: "PERCEPTION", value: 7 }], text: "", next: "end" },
          {
            requirements: [{ trait: "anxious", value: true }],
            text: "Something's amiss...",
            next: "end",
          },
        ],
      },
      {
        id: "0",
        description: [
          "Nothing of note registers on the ships intruments once you arrive at your destination.",
          "Looking outside the windows you see nothing but black. You are surrounded by the emptyness of space.",
        ],
        options: [
          { text: "Let's get out of here.", next: "end" },
          {
            requirements: [{ trait: "anxious", value: true }],
            text: "You sense something is amiss...",
            next: "end",
          },
        ],
      },
    ],
  },
];

export default weighted(addWeight(events, 1));
