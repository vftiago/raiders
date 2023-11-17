import { Card, Stack, Text } from "@mantine/core";
import { ShipPowerReactor } from "../../data/domains/ship/ship";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const ShipPowerReactorCard = ({ shipPowerReactor }: { shipPowerReactor: ShipPowerReactor }) => {
  return (
    <Card withBorder>
      <Text>Ship Power Reactor</Text>
      <Stack align="center" justify="space-around">
        <Text>{shipPowerReactor.reactorWeight}/turn</Text>
        <Text fw={700} fz={24} className="flex items-center gap-1">
          {shipPowerReactor.powerOutput} <BsFillLightningChargeFill size={18} />
        </Text>
      </Stack>
    </Card>
  );
};
