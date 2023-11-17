import { Card, Stack, Text } from "@mantine/core";
import { ShipImpulseDrive } from "../../data/domains/ship/ship";
import { GiWaterDrop } from "react-icons/gi";

export const ShipEngineCard = ({ shipEngine }: { shipEngine: ShipImpulseDrive }) => {
  return (
    <Card withBorder>
      <Text>Ship Engine</Text>
      <Stack align="center">
        <Text>{shipEngine.fuelConsumption}/turn</Text>
        <Text fw={700} fz={24} className="flex items-center gap-1">
          {shipEngine.maxFuelCapacity} <GiWaterDrop size={18} />
        </Text>
      </Stack>
    </Card>
  );
};
