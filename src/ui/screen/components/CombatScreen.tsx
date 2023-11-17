import { Card, Grid, Stack, Text, Title } from "@mantine/core";
import { Ship, ShipWeapon } from "../../../data/domains/ship/ship";
import { WeaponCard } from "../../cards/WeaponCard";
import { ShipHealthCard } from "../../cards/ShipHealthCard";
import { ShipEngineCard } from "../../cards/ShipEngineCard";
import { ShipPowerReactorCard } from "../../cards/ShipPowerReactorCard";
import { ShipTacticsCard } from "../../cards/ShipTacticsCard";
import { useEffect, useState } from "react";
import { Enemy } from "../../../data/domains/enemy/enemy";
import clsx from "clsx";

const CombatScreen = ({
  enemies,
  playerShip,
  onClickFire,
}: {
  enemies: Enemy[];
  playerShip: Ship;
  onClickFire: ({ weapon, targetEnemyId }: { weapon: ShipWeapon; targetEnemyId: string }) => void;
}) => {
  const { shipWeapons: playerShipWeapons } = playerShip;

  const [weaponTarget, setWeaponTarget] = useState<string>(enemies[0].id);

  useEffect(() => {
    if (!enemies.find(({ id: enemyId }) => enemyId === weaponTarget)) {
      setWeaponTarget(enemies[0].id);
    }
  }, [enemies, weaponTarget]);

  return (
    <Stack justify="space-between">
      <Card>
        <Stack justify="space-between">
          <Title>Fight!</Title>
          <Stack justify="space-between">
            <Grid columns={12}>
              {enemies.map(({ ship: enemyShip, id: enemyId }) => {
                const { name: enemyName } = enemyShip;

                return (
                  <Grid.Col span={6} key={enemyId}>
                    <Card
                      onClick={() => {
                        setWeaponTarget(enemyId);
                      }}
                      withBorder
                      className={clsx("flex flex-row", {
                        "border-yellow-200": enemyId === weaponTarget,
                        "cursor-pointer": enemyId !== weaponTarget,
                      })}
                    >
                      <Grid columns={12}>
                        <Grid.Col span={6}>
                          <Text>Enemy Intention</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text fz="xl">{enemyName}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text>Fire Lasers</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <ShipHealthCard ship={enemyShip} />
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                );
              })}
            </Grid>

            <Card withBorder>
              <Grid columns={12}>
                <Grid.Col span={6}>
                  <ShipHealthCard ship={playerShip} />
                </Grid.Col>
                <Grid.Col span={2}>
                  <ShipTacticsCard />
                </Grid.Col>
                <Grid.Col span={2}>
                  {playerShip.shipPowerReactor ? (
                    <ShipPowerReactorCard shipPowerReactor={playerShip.shipPowerReactor} />
                  ) : null}
                </Grid.Col>
                <Grid.Col span={2}>
                  <ShipEngineCard shipEngine={playerShip.shipImpulseDrive} />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text>Weapons Array</Text>
                </Grid.Col>
                {playerShipWeapons.map((weapon, index) => {
                  return (
                    <Grid.Col span={3} key={index}>
                      <WeaponCard
                        key={index}
                        weapon={weapon}
                        onClickFire={() => {
                          onClickFire({ weapon, targetEnemyId: weaponTarget });
                        }}
                      />
                    </Grid.Col>
                  );
                })}
              </Grid>
            </Card>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default CombatScreen;
