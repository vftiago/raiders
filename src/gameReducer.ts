import invariant from "tiny-invariant";
import { GameState } from "./data/createGame";
import { ShipWeapon, WeaponType } from "./data/domains/ship/ship";
import { GameCombat } from "./data/events/eventTable";
import { Enemy } from "./data/domains/enemy/enemy";

export type GameAction =
  | {
      type: "jump";
    }
  | {
      type: "fire";
      weapon: ShipWeapon;
      targetEnemyId: string;
      damage: number;
      accuracyCheck: number;
      evasionCheck: number;
    };

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "fire": {
      const { weapon, targetEnemyId, accuracyCheck, evasionCheck, damage } = action;

      let damageToShields = 0;
      let damageToArmor = 0;
      let damageToHull = 0;

      const { enemies } = state.sectors[state.currentSector].scenes[state.currentScene] as GameCombat;

      const targetEnemy = enemies.find((enemy: Enemy) => enemy.id === targetEnemyId);

      invariant(targetEnemy, `Enemy with id ${targetEnemyId} not found`);

      const { ship: targetEnemyShip } = targetEnemy;

      const {
        shipShieldGenerator: { currentShieldPoints: enemyCurrentShieldPoints } = { currentShieldPoints: 0 },
        shipArmor: { currentArmorPoints: enemyCurrentArmorPoints } = { currentArmorPoints: 0 },
        shipChassis: { currentHullIntegrity },
      } = targetEnemyShip;

      const combatLog: string[] = [];

      const accuracy = weapon.type === WeaponType.MISSILE ? weapon.currentAmmo.accuracy : weapon.accuracy;

      const enemyEvasion = targetEnemyShip.shipImpulseDrive.evasion;

      if (accuracy < accuracyCheck) {
        combatLog.push("Missed");
      } else if (evasionCheck < enemyEvasion) {
        combatLog.push("Enemy evaded");
      } else {
        if (weapon.type === WeaponType.ENERGY) {
          if (damage > 0 && enemyCurrentShieldPoints > 0) {
            const actualDamage = damage;

            damageToShields = actualDamage > enemyCurrentShieldPoints ? enemyCurrentShieldPoints : actualDamage;

            combatLog.push(`Dealt ${damageToShields} damage to ${targetEnemyShip.name}'s shields`);
          }
        }

        if (damage - damageToShields > 0 && enemyCurrentArmorPoints > 0) {
          const actualDamage = damage - damageToShields;

          damageToArmor = actualDamage > enemyCurrentArmorPoints ? enemyCurrentArmorPoints : actualDamage;

          combatLog.push(`Dealt ${damageToArmor} damage to ${targetEnemyShip.name}'s armor`);
        }

        if (damage - damageToShields - damageToArmor > 0 && currentHullIntegrity > 0) {
          const actualDamage = damage - damageToShields - damageToArmor;

          damageToHull = actualDamage > currentHullIntegrity ? currentHullIntegrity : actualDamage;

          combatLog.push(`Dealt ${damageToHull} damage to ${targetEnemyShip.name}'s hull`);
        }
      }

      const newEnemies = enemies.map((enemy) => {
        const { ship: enemyShip, id: enemyId } = enemy;

        if (enemyId === targetEnemyId) {
          return {
            ...enemy,
            ship: {
              ...enemyShip,
              shipShieldGenerator: enemyShip.shipShieldGenerator
                ? {
                    ...enemyShip.shipShieldGenerator,
                    currentShieldPoints: enemyCurrentShieldPoints - damageToShields,
                  }
                : undefined,
              shipArmor: enemyShip.shipArmor
                ? {
                    ...enemyShip.shipArmor,
                    currentArmorPoints: enemyCurrentArmorPoints - damageToArmor,
                  }
                : undefined,
              shipChassis: {
                ...enemyShip.shipChassis,
                currentHullIntegrity: currentHullIntegrity - damageToHull,
              },
            },
          };
        }

        return enemy;
      });

      if (newEnemies.length === 0) {
        return {
          ...state,
          sectors: state.sectors.map((sector, sectorIndex) => {
            if (sectorIndex === state.currentSector) {
              return {
                ...sector,
                scenes: sector.scenes.map((scene, sceneIndex) => {
                  if (sceneIndex === state.currentScene) {
                    invariant(scene.type === "combat", "Scene is not a combat scene");

                    return {
                      ...scene,
                      combatLog,
                      enemies: newEnemies,
                    };
                  }

                  return scene;
                }),
              };
            }

            return sector;
          }),
        };
      }

      return {
        ...state,
        playerShip: {
          ...state.playerShip,
          shipWeapons: state.playerShip.shipWeapons.map((playerWeapon) => {
            if (playerWeapon.id === weapon.id) {
              if (playerWeapon.type !== WeaponType.ENERGY) {
                return {
                  ...playerWeapon,
                  currentAmmoCount: playerWeapon.currentAmmoCount - 1,
                };
              }

              return playerWeapon;
            }

            return playerWeapon;
          }),
        },
        sectors: state.sectors.map((sector, sectorIndex) => {
          if (sectorIndex === state.currentSector) {
            return {
              ...sector,
              scenes: sector.scenes.map((scene, sceneIndex) => {
                if (sceneIndex === state.currentScene) {
                  invariant(scene.type === "combat", "Scene is not a combat scene");

                  return {
                    ...scene,
                    combatLog,
                    enemies: newEnemies,
                  };
                }

                return scene;
              }),
            };
          }

          return sector;
        }),
      };
    }

    case "jump": {
      return {
        ...state,
        currentScene: state.currentScene + 1,
      };
    }

    default:
      return state;
  }
};
