export type CharacterRequirement = {
  stat: string;
  value: number;
};

export type ItemRequirement = {
  item: string;
  quantity: number;
};

export type StateRequirement = {
  state: string;
  status: boolean;
};

export type Requirement =
  | CharacterRequirement
  | ItemRequirement
  | StateRequirement;

export type SceneOption = {
  requirements?: Requirement[];
  text: string;
  linkTo: string;
};

export type Scene = {
  id: string;
  title?: string;
  description: string;
  options: SceneOption[];
};

export type GenericScene = { id: string } & Record<string, Requirement>;
