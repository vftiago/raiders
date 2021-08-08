import { Scene, SceneParagraph } from "./types/scenes";

export const getParagraph = (
  scene: Scene,
  paragraphId: string = "0",
): SceneParagraph => {
  const sceneParagraph = scene.narrative.find(
    (paragraph) => paragraph.id === paragraphId,
  );

  if (!sceneParagraph) {
    throw new Error(`Paragraph with id ${paragraphId} not found`);
  }

  return sceneParagraph;
};
