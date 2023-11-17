import { Card, List, Stack, Text, Title } from "@mantine/core";
import { GameEvent } from "../../../data/scenes/eventTable";

const EventScreen = ({ eventScene }: { eventScene: GameEvent }) => {
  const { name, narrative } = eventScene.eventNarrative;

  return (
    <Stack gap="8">
      <Card>
        <Stack gap="8">
          <Title order={2}>{name}</Title>
          {narrative[0].description.map((paragraph, index) => {
            return (
              <Text fz="lg" key={index}>
                {paragraph}
              </Text>
            );
          })}
          <Card display="flex" bg="gray.8" radius="sm">
            <List type="ordered">
              {narrative[0].options.map((option, index) => {
                return (
                  <List.Item
                    className="select-none list-decimal hover:cursor-pointer hover:text-yellow-300 active:text-cyan-300"
                    key={index}
                  >
                    <Text fz="lg" className="flex items-center gap-2 px-1">
                      {option.requirements?.map((requirement, index) => {
                        if ("trait" in requirement) {
                          return (
                            <span key={index} className="font-bold">
                              [{requirement.trait.toLocaleUpperCase()}]
                            </span>
                          );
                        }

                        return null;
                      })}
                      {option.text}
                    </Text>
                  </List.Item>
                );
              })}
            </List>
          </Card>
        </Stack>
      </Card>
    </Stack>
  );
};

export default EventScreen;
