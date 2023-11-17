import { Card, Stack, SegmentedControl, Text } from "@mantine/core";

export const ShipTacticsCard = () => {
  return (
    <Card withBorder>
      <Text>Ship Tactics</Text>
      <Stack align="center" justify="space-around">
        <SegmentedControl w="full" orientation="vertical" color="blue" data={["Agressive", "Neutral", "Evasive"]} />
      </Stack>
    </Card>
  );
};
