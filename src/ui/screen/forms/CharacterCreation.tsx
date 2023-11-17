import { useState } from "react";
import { Character } from "../../../data/domains/character/character";
import {
  Button,
  Card,
  Flex,
  Group,
  TextInput,
  NumberInput,
  Stack,
  Text,
  Title,
  Combobox,
  InputBase,
  Input,
} from "@mantine/core";
import { DEFAULT_CHARACTER } from "../../../data/domains/character/defaults";

const CharacterCreation = () => {
  const [draftCharacter] = useState<Character>(DEFAULT_CHARACTER);

  return (
    <Stack gap="8">
      <Card>
        <Stack gap="8">
          <Title order={2}>Character Screen</Title>
          <Flex justify="space-evenly" gap="16px">
            <Stack flex={1}>
              <TextInput label="Name" defaultValue={draftCharacter.name} />
            </Stack>
            <Stack>
              <NumberInput label="Age" defaultValue={draftCharacter.age} min={0}></NumberInput>
            </Stack>
            <Stack>
              {/* @ts-expect-error because it actually works*/}
              <Combobox label="Gender">
                <Combobox.Target>
                  <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                  >
                    <Input.Placeholder>Pick one</Input.Placeholder>
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options>
                    <Combobox.Option value="Male">Male</Combobox.Option>
                    <Combobox.Option value="Female">Female</Combobox.Option>
                  </Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
            </Stack>
          </Flex>
          <Flex gap="16px">
            <Card>
              <Stack>
                <Title order={3}>Attributes</Title>
                <Stack>
                  {Object.entries(draftCharacter.attributes).map(([key, attribute]) => {
                    const { label, value } = attribute;

                    return (
                      <Card p="0" w="250px" bg="gray.8" key={key}>
                        <Group p="8px">
                          <NumberInput defaultValue={value} min={0} max={10} size="md" w="120px"></NumberInput>
                          <Text>{label}</Text>
                        </Group>
                      </Card>
                    );
                  })}
                </Stack>
              </Stack>
            </Card>
            <Stack>
              <Title order={3}>Traits</Title>
              <Stack>
                {Object.entries(draftCharacter.traits).map(([key, trait]) => {
                  const { label, value } = trait;

                  return (
                    <Card p="4px" bg="gray.8" key={key}>
                      <Group pr="8px">
                        <Button size="xs" bg={value ? "yellow.8" : ""}>
                          Tag
                        </Button>
                        <Text>{label}</Text>
                      </Group>
                    </Card>
                  );
                })}
              </Stack>
            </Stack>
            <Stack flex={1}>
              <Title order={3}>Skills</Title>
              <Stack>
                {Object.entries(draftCharacter.skills).map(([key, skill]) => {
                  const { label, value } = skill;

                  return (
                    <Card p="0" bg="gray.8" key={key}>
                      <Group p="8px">
                        <NumberInput defaultValue={value} w="80px" min={0} max={300} size="xs"></NumberInput>
                        <Text>{label}</Text>
                      </Group>
                    </Card>
                  );
                })}
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Card>

      <Button className="self-end" size="lg">
        Ready
      </Button>
    </Stack>
  );
};

export default CharacterCreation;
