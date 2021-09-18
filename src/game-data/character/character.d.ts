// defines the character's physical body
type PhysicalCharacterStats = "str" | "dex" | "con" | "beauty";

// defines the character's mental qualities
type PsychologicalCharacterStats = "int" | "per" | "wis" | "cha";

// defines the character's metaphysical attributes
type MetaphysicalCharacterStats = "faith" | "luck";

type CharacterStatId = PhysicalCharacterStats &
  PsychologicalCharacterStats &
  MetaphysicalCharacterStats;

type CharacterStat = { label: string; value: number };

type CharacterStats = Set<CharacterStatId, CharacterStat>;

type CharacterSheet = {
  characterStats: CharacterStats;
  characterTrauts: CharacterTrait[];
};
