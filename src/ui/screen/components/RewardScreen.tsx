import { Card, Stack, Table, Title } from "@mantine/core";
import { Enemy } from "../../../data/domains/enemy/enemy";

export const RewardScreen = ({ enemies }: { enemies: Enemy[] }) => {
  const remainingLoot = enemies.map(({ reward: { weightedLootTable } }) => {
    const loot = weightedLootTable.pick();

    return loot.length > 0
      ? loot.map((lootPiece) => {
          if (lootPiece === null) {
            return null;
          }

          return (
            <Table.Tr>
              <Table.Td>{lootPiece.item.name}</Table.Td>
              <Table.Td>{lootPiece.quantity}</Table.Td>
            </Table.Tr>
          );
        })
      : null;
  });

  return (
    <Card>
      <Stack justify="space-between">
        <Title>Victory!</Title>

        <Title order={3}>Loot</Title>

        <Table highlightOnHover className="flex">
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Experience</Table.Td>
              <Table.Td>
                {enemies.reduce((acc, { reward: { experience } }) => {
                  return acc + experience;
                }, 0)}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Scrap</Table.Td>
              <Table.Td>
                {enemies.reduce((acc, { reward: { scrap } }) => {
                  return acc + scrap;
                }, 0)}
              </Table.Td>
            </Table.Tr>
            {remainingLoot}
          </Table.Tbody>
        </Table>
      </Stack>
    </Card>
  );
};
