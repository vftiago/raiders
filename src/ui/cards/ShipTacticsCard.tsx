import { Card, Stack, SegmentedControl, Text } from "@mantine/core";

export const ShipTacticsCard = () => {
  return (
    <Card withBorder>
      <Stack align="center" justify="space-around">
        <Text className="flex items-center gap-1">Tactics</Text>
        <SegmentedControl orientation="vertical" color="blue" data={["Agressive", "Neutral", "Evasive"]} />
      </Stack>
    </Card>
  );
};
