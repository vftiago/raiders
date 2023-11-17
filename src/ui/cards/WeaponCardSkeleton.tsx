import { Button, Card, Group, Text } from "@mantine/core";

export const WeaponCardSkeleton = () => {
  return (
    <Card withBorder>
      <Group justify="space-between" mb="md">
        <Text fz="xl"></Text>
      </Group>

      <Group justify="space-between" mb="md">
        <Text fz="lg"></Text>
        <Text fz="lg"></Text>
        <Text fz="lg"></Text>
      </Group>

      <Button disabled size="lg"></Button>
    </Card>
  );
};
