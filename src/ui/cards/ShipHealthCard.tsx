import { Card, Flex, Progress, Text } from "@mantine/core";
import { Ship } from "../../data/domains/ship/ship";

export const ShipHealthCard = ({ ship }: { ship: Ship }) => {
  return (
    <Card withBorder>
      <Text>{ship.name}</Text>
      {ship.shipShieldGenerator ? (
        <Flex align="center" gap="xs">
          <Text className="w-20">
            {ship.shipShieldGenerator.currentShieldPoints}/{ship.shipShieldGenerator.maxShieldPoints}
          </Text>
          <Text className="w-20 flex justify-end">Shields</Text>
          <Progress
            className="w-full"
            value={(ship.shipShieldGenerator.currentShieldPoints / ship.shipShieldGenerator.maxShieldPoints) * 100}
          />
        </Flex>
      ) : null}

      {ship.shipArmor ? (
        <Flex align="center" gap="xs">
          <Text className="w-20">
            {ship.shipArmor.currentArmorPoints}/{ship.shipArmor.maxArmorPoints}
          </Text>
          <Text className="w-20 flex justify-end">Armor</Text>
          <Progress
            className="w-full"
            value={(ship.shipArmor.currentArmorPoints / ship.shipArmor.maxArmorPoints) * 100}
          />
        </Flex>
      ) : null}

      <Flex align="center" gap="xs">
        <Text className="w-20">
          {ship.shipChassis.currentHullIntegrity}/{ship.shipChassis.maxhullIntegrity}
        </Text>
        <Text className="w-20 flex justify-end">Hull</Text>
        <Progress
          className="w-full"
          value={(ship.shipChassis.currentHullIntegrity / ship.shipChassis.maxhullIntegrity) * 100}
        />
      </Flex>
    </Card>
  );
};
