type PhysicalCharacterStats = "str" | "dex" | "con";

type PsychologicalCharacterStats = "int" | "wis" | "cha";

type MysticalCharacterStats = "luck";

type CharacterStatId = PhysicalCharacterStats &
  PsychologicalCharacterStats &
  MysticalCharacterStats;

export type CharacterStat = { label: string; value: number };

export type CharacterStats = Record<CharacterStatId, CharacterStat>;

export type CharacterSheet = {
  characterStats: CharacterStats;
};
