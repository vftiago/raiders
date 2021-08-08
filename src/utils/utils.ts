import { WeightedEntity } from "../game-data/types/scenes";

export const pickWeightedItem = <T extends WeightedEntity>(
  weightedItemMap: Map<string, T>,
): T => {
  const itemArray = Array.from(weightedItemMap.values());

  const totalWeight = itemArray.reduce((acc, item) => {
    return (acc += item.weight);
  }, 0);

  const randWeight = Math.floor(Math.random() * totalWeight);

  let randItem,
    currentWeight = randWeight;

  for (let item of itemArray) {
    if (item.weight > currentWeight) {
      randItem = item;
      break;
    }
    currentWeight -= item.weight;
  }

  if (!randItem) {
    throw new Error(`Scene not found`);
  }

  return randItem;
};
