import { Button, Card, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { Enemy } from "../../data/domains/enemy/enemy";

export const RewardScreen = ({ enemies }: { enemies: Enemy[] }) => {
  return (
    <Card>
      <Stack justify="space-between">
        <Title>Victory</Title>
        <Title order={3}>Experience</Title>
        <Text>
          {enemies.reduce((acc, { reward: { experience } }) => {
            return acc + experience;
          }, 0)}
        </Text>
        <Divider />

        <Title order={3}>Loot</Title>
        <Text>
          Scrap:{" "}
          {enemies.reduce((acc, { reward: { scrap } }) => {
            return acc + scrap;
          }, 0)}
        </Text>

        <Group>
          {enemies.map(({ id: enemyId, reward: { loot } }) => {
            return <Stack key={enemyId}>{loot.length > 0 ? <Text>Loot: {loot.join(", ")}</Text> : null}</Stack>;
          })}
        </Group>

        <Group>
          <Button onClick={() => {}}>Scavenge</Button>
          <Button onClick={() => {}}>Leave</Button>
        </Group>
      </Stack>
    </Card>
  );
};
