type CharacterRequirement = {
  stat: string;
  value: number;
};

type ItemRequirement = {
  item: string;
  quantity: number;
};

type StateRequirement = {
  state: string;
  status: boolean;
};

export type Requirement =
  | CharacterRequirement
  | ItemRequirement
  | StateRequirement;
