import { Attribute, Character, Gender, Perk, Skill, Trait } from "./character";

export const DEFAULT_CHARACTER: Character = {
  name: "John",
  age: 18,
  gender: Gender.Male,
  attributes: {
    [Attribute.Strength]: {
      label: "Strength",
      value: 5,
    },
    [Attribute.Perception]: {
      label: "Perception",
      value: 5,
    },
    [Attribute.Endurance]: {
      label: "Endurance",
      value: 5,
    },
    [Attribute.Agility]: {
      label: "Agility",
      value: 5,
    },
    [Attribute.Intelligence]: {
      label: "Intelligence",
      value: 5,
    },
    [Attribute.Charisma]: {
      label: "Charisma",
      value: 5,
    },
    [Attribute.Luck]: {
      label: "Luck",
      value: 5,
    },
  },
  perks: {
    [Perk.Bruiser]: {
      label: "Bruiser",
      value: false,
    },
    [Perk.HeavyHanded]: {
      label: "Heavy Handed",
      value: false,
    },
    [Perk.StrongBack]: {
      label: "Strong Back",
      value: false,
    },
    [Perk.EagleEye]: {
      label: "Eagle Eye",
      value: false,
    },
  },
  traits: {
    [Trait.FastMetabolism]: {
      label: "Fast Metabolism",
      value: false,
    },
    [Trait.Bruiser]: {
      label: "Bruiser",
      value: false,
    },
    [Trait.HeavyHanded]: {
      label: "Heavy Handed",
      value: false,
    },
    [Trait.FastShot]: {
      label: "Fast Shot",
      value: false,
    },
    [Trait.BloodyMess]: {
      label: "Bloody Mess",
      value: false,
    },
    [Trait.Jinxed]: {
      label: "Jinxed",
      value: false,
    },
    [Trait.GoodNatured]: {
      label: "Good Natured",
      value: false,
    },
    [Trait.ChemReliant]: {
      label: "Chem Reliant",
      value: false,
    },
    [Trait.ChemResistant]: {
      label: "Chem Resistant",
      value: false,
    },
    [Trait.Skilled]: {
      label: "Skilled",
      value: false,
    },
    [Trait.Gifted]: {
      label: "Gifted",
      value: false,
    },
  },
  skills: {
    [Skill.SmallGuns]: {
      label: "Small Guns",
      value: 50,
    },
    [Skill.BigGuns]: {
      label: "Big Guns",
      value: 50,
    },
    [Skill.EnergyWeapons]: {
      label: "Energy Weapons",
      value: 50,
    },
    [Skill.Unarmed]: {
      label: "Unarmed",
      value: 50,
    },
    [Skill.MeleeWeapons]: {
      label: "Melee Weapons",
      value: 50,
    },
    [Skill.Throwing]: {
      label: "Throwing",
      value: 50,
    },
    [Skill.FirstAid]: {
      label: "First Aid",
      value: 50,
    },
    [Skill.Doctor]: {
      label: "Doctor",
      value: 50,
    },
    [Skill.Sneak]: {
      label: "Sneak",
      value: 50,
    },
    [Skill.Repair]: {
      label: "Repair",
      value: 50,
    },
    [Skill.Science]: {
      label: "Science",
      value: 50,
    },
    [Skill.Barter]: {
      label: "Barter",
      value: 50,
    },
    [Skill.Gambling]: {
      label: "Gambling",
      value: 50,
    },
    [Skill.Speech]: {
      label: "Speech",
      value: 50,
    },
  },
  inventory: {},
};
