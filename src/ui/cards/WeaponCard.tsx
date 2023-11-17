import { Badge, Button, Card, Checkbox, Group, Stack, Text } from "@mantine/core";
import { ShipWeapon, WeaponType } from "../../data/domains/ship/ship";
import { useContext } from "react";
import { GameStateContext } from "../../GameContext";
import invariant from "tiny-invariant";

export const WeaponCard = ({
  weapon,
  onClickFire,
}: {
  weapon: ShipWeapon;
  onClickFire: ({ weapon }: { weapon: ShipWeapon }) => void;
}) => {
  const gameState = useContext(GameStateContext);

  invariant(gameState, "gameState is not provided");

  const {
    playerShip: {
      shipComputer: { energyWeaponAccuracyEfficiency, kineticWeaponAccuracyEfficiency },
    },
  } = gameState;

  switch (weapon.type) {
    case WeaponType.ENERGY:
      return (
        <Card withBorder>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text fz="xl">{weapon.name}</Text>
              <Badge size="sm" variant="gradient">
                Ready
              </Badge>
            </Group>

            <Group justify="space-between">
              <Text>
                Damage: {weapon.damage.min}-{weapon.damage.max}
              </Text>
              <Text>Accuracy: {weapon.accuracy * energyWeaponAccuracyEfficiency * 100}%</Text>
              <Text>Required Power: {weapon.requiredPower}</Text>
            </Group>

            <Group justify="space-between">
              <Checkbox defaultChecked label="Autofire" />

              <Button
                onClick={() => {
                  onClickFire({ weapon });
                }}
              >
                Fire
              </Button>
            </Group>
          </Stack>
        </Card>
      );

    case WeaponType.KINETIC: {
      const isOutoOfAmmo = weapon.currentAmmoCount <= 0;

      return (
        <Card withBorder>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text fz="xl">{weapon.name}</Text>
              <Badge size="sm" variant="gradient">
                {isOutoOfAmmo ? "Out of ammo" : "Ready"}
              </Badge>
            </Group>

            <Group justify="space-between">
              <Text>
                Damage: {weapon.currentAmmo.damage.min}-{weapon.currentAmmo.damage.max}
              </Text>{" "}
              <Text>Accuracy: {weapon.accuracy * kineticWeaponAccuracyEfficiency * 100}%</Text>
              <Text>
                Ammo: {weapon.currentAmmoCount}/{weapon.maxAmmo}
              </Text>
            </Group>

            <Group justify="space-between">
              <Checkbox defaultChecked label="Autofire" />

              <Button
                disabled={weapon.currentAmmoCount <= 0}
                onClick={() => {
                  onClickFire({ weapon });
                }}
              >
                Fire
              </Button>
            </Group>
          </Stack>
        </Card>
      );
    }

    case WeaponType.MISSILE: {
      const isOutoOfAmmo = weapon.currentAmmoCount <= 0;

      return (
        <Card withBorder>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text fz="xl">{weapon.name}</Text>
              <Badge size="sm" variant="gradient">
                {isOutoOfAmmo ? "Out of ammo" : "Ready"}
              </Badge>
            </Group>

            <Group justify="space-between">
              <Text>
                Damage: {weapon.currentAmmo.damage.min}-{weapon.currentAmmo.damage.max}
              </Text>{" "}
              <Text>Accuracy: {weapon.currentAmmo.accuracy * 100}%</Text>
              <Text>
                Ammo: {weapon.currentAmmoCount}/{weapon.maxAmmo}
              </Text>
            </Group>

            <Group justify="space-between">
              <Checkbox defaultChecked label="Autofire" />

              <Button
                disabled={weapon.currentAmmoCount <= 0}
                onClick={() => {
                  onClickFire({ weapon });
                }}
              >
                Fire
              </Button>
            </Group>
          </Stack>
        </Card>
      );
    }
  }
};
