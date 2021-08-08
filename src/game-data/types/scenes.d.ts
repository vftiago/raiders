import { ReactNode } from "react";
import { Requirement } from "./requirement";

export type WeightedEntity = {
  id: string;
  weight: number;
};

export type SceneOption = {
  requirements?: Requirement[];
  text: string;
  next: string;
};

export type SceneParagraph = {
  id: string;
  description: ReactNode;
  options: SceneOption[];
};

export type Scene = WeightedEntity & {
  title: string;
  narrative: SceneParagraph[];
};

export type SceneTable = Record<string, Scene>;

class ListNode {
  data: SceneParagraph;
  next: string[];

  constructor(data: SceneParagraph, next: string[]) {
    this.data = data;
    this.next = [];
  }
}

class LinkedList {
  head: Scene | null;

  constructor(head = null) {
    this.head = head;
  }
}
