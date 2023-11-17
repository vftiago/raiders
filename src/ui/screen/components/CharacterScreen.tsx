import { Flex, Stack, Text, Title } from "@mantine/core";
import { Character } from "../../../data/domains/character/character";

export const CharacterScreen = ({ character }: { character: Character }) => {
  return (
    <Stack>
      <Title order={2}>{character.name}</Title>
      <Flex>
        <Stack>
          <Title order={3}>Attributes</Title>
          <Stack>
            {Object.entries(character.attributes).map(([key, attribute]) => {
              const { label, value } = attribute;
              return (
                <Flex key={key}>
                  <Text>
                    {label} : {value}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
          <Title order={3}>Skills</Title>
          <Stack>
            {Object.entries(character.skills).map(([key, skill]) => {
              const { label, value } = skill;
              return (
                <Flex key={key}>
                  <Text>
                    {label} : {value}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};
