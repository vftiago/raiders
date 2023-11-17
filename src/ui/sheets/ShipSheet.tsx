import { Flex, Stack, Text, Title } from "@mantine/core";
import { Ship } from "../../data/domains/ship/ship";

export const CharacterSheet = ({ ship }: { ship: Ship }) => {
  return (
    <Stack>
      <Title order={2}>{ship.name}</Title>
      <Flex>
        <Stack>
          <Title order={3}>Attributes</Title>
          <Stack>
            {Object.entries(ship.attributes).map(([key, attribute]) => {
              const { label, value } = attribute;
              return (
                <Flex key={key}>
                  <Text>{label}</Text>
                </Flex>
              );
            })}
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};
