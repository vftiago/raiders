import { ReactNode } from "react";
import { weighted, addWeight } from "@lrkit/weighted";
import { NamedEntity } from "../domains/common";
import { EnemyEncounter } from "../domains/encounter/encounter";

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

export type EventNarrative = NamedEntity & {
  narrative: EventParagraph[];
};

export type GameCombat = {
  type: SceneType.COMBAT;
  enemyEncounter: EnemyEncounter;
};

export type GameEvent = {
  type: SceneType.EVENT;
  eventNarrative: EventNarrative;
};

const eventNarrativeTable: EventNarrative[] = [
  {
    id: "0",
    name: "Silence",
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
  {
    id: "1",
    name: "Debris Field",
    narrative: [
      {
        id: "0",
        description: [
          "You arrive at your destination to find the remains of a battle long past.",
          "The field is littered with the remains of ships and other debris.",
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

export const weightedEventNarrativeTable = weighted(addWeight(eventNarrativeTable, 1));
