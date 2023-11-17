export enum Gender {
  Female = "female",
  Male = "male",
}

export enum Attribute {
  Strength = "strength",
  Perception = "perception",
  Endurance = "endurance",
  Charisma = "charisma",
  Intelligence = "intelligence",
  Agility = "agility",
  Luck = "luck",
}

export enum Trait {
  FastMetabolism = "fast-metabolism",
  Bruiser = "bruiser",
  HeavyHanded = "heavy-handed",
  FastShot = "fast-shot",
  BloodyMess = "bloody-mess",
  Jinxed = "jinxed",
  GoodNatured = "good-natured",
  ChemReliant = "chem-reliant",
  ChemResistant = "chem-resistant",
  Skilled = "skilled",
  Gifted = "gifted",
}

export enum Perk {
  Bruiser = "bruiser",
  HeavyHanded = "heavy-handed",
  StrongBack = "strong-back",
  EagleEye = "eagle-eye",
}

export enum Skill {
  SmallGuns = "small-guns",
  BigGuns = "big-guns",
  EnergyWeapons = "energy-weapons",
  Unarmed = "unarmed",
  MeleeWeapons = "melee-weapons",
  Throwing = "throwing",
  FirstAid = "first-aid",
  Doctor = "doctor",
  Sneak = "sneak",
  Repair = "repair",
  Science = "science",
  Barter = "barter",
  Gambling = "gambling",
  Speech = "speech",
}

export enum Item {
  Credits = "credits",
}

type Labeled<T> = {
  value: T;
  label: string;
};

type Attributes = Record<Attribute, Labeled<number>>;

type Traits = Record<Trait, Labeled<boolean>>;

type Perks = Record<Perk, Labeled<boolean>>;

type Skills = Record<Skill, Labeled<number>>;

export type Character = {
  name: string;
  age: number;
  gender: Gender;
  attributes: Attributes;
  perks: Perks;
  traits: Traits;
  skills: Skills;
  inventory: Record<string, number>;
};
