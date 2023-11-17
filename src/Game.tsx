import { useCallback, useReducer, useRef } from "react";
import { Box, Flex, Tabs, Container, Stack, Button, Card } from "@mantine/core";
import buttonClick from "./assets/button-click.wav";
import playSound from "./utils/playSound";
import EventScene from "./ui/scenes/EventScene";
import { gameReducer, GameAction } from "./gameReducer";
import { GameState, INITIAL_GAME_STATE } from "./data/createGame";
import CombatScene from "./ui/scenes/CombatScene";
import { ShipWeapon } from "./data/domains/ship/ship";
import { GameStateContext } from "./GameContext";
import { RewardScreen } from "./ui/scenes/RewardScreen";
import CharacterCreation from "./ui/forms/CharacterCreation";
import { SceneType } from "./data/events/eventTable";

const Game = () => {
  const buttonClickAudioElementRef = useRef(null);

  const [gameState, dispatch] = useReducer<React.Reducer<GameState, GameAction>>(gameReducer, INITIAL_GAME_STATE);

  const { log, currentSceneIndex, currentSectorIndex, sectors, rng } = gameState;

  const currentScene = sectors[currentSectorIndex].scenes[currentSceneIndex];

  const onClickJump = useCallback(() => {
    dispatch({ type: "jump" });
  }, []);

  const onClickFire = useCallback(
    ({ weapon, targetEnemyId }: { weapon: ShipWeapon; targetEnemyId: string }) => {
      const accuracyCheck = rng();
      const evasionCheck = rng();
      const damageRange = weapon.type === "energy" ? weapon.damage : weapon.currentAmmo.damage;
      const damage = Math.floor(rng() * (damageRange.max - damageRange.min + 1) + damageRange.min);

      dispatch({ type: "fire", weapon: weapon, targetEnemyId, accuracyCheck, evasionCheck, damage });
    },
    [rng],
  );

  const renderGameScene = () => {
    switch (currentScene.type) {
      case SceneType.COMBAT: {
        const {
          enemyEncounter: { enemies },
        } = currentScene;

        if (enemies.every(({ ship: enemyShip }) => enemyShip.shipChassis.currentHullIntegrity <= 0)) {
          return <RewardScreen enemies={enemies} />;
        }

        return (
          <CombatScene
            enemies={enemies.filter(({ ship: enemyShip }) => enemyShip.shipChassis.currentHullIntegrity > 0)}
            playerShip={gameState.playerShip}
            onClickFire={onClickFire}
          />
        );
      }
      case SceneType.EVENT: {
        return <EventScene eventScene={currentScene} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <GameStateContext.Provider value={gameState}>
      <Container size="xl" h="100%" p="0">
        <audio src={buttonClick} ref={buttonClickAudioElementRef} preload="auto" />

        <Stack gap="16">
          <Stack gap="16" h="100%">
            <Flex py="16" justify="space-between">
              {sectors[currentSectorIndex].scenes.map((_, index) => {
                return <Box key={index} p="6" bg={index === currentSceneIndex ? "yellow.3" : "blue"} />;
              })}
            </Flex>
            <Tabs defaultValue="game" h="100%">
              <Tabs.List>
                <Tabs.Tab
                  onClick={() => {
                    playSound(buttonClickAudioElementRef);
                  }}
                  value="game"
                >
                  Game
                </Tabs.Tab>
                <Tabs.Tab
                  onClick={() => {
                    playSound(buttonClickAudioElementRef);
                  }}
                  value="character"
                >
                  Character
                </Tabs.Tab>
                <Tabs.Tab
                  onClick={() => {
                    playSound(buttonClickAudioElementRef);
                  }}
                  value="ship"
                >
                  Ship
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel p="0" value="game" h="100%">
                {renderGameScene()}
              </Tabs.Panel>
              <Tabs.Panel p="0" value="character">
                <CharacterCreation />
              </Tabs.Panel>
              <Tabs.Panel p="0" value="ship">
                three!
              </Tabs.Panel>
            </Tabs>
          </Stack>
          <Card>
            <Flex className="grow" gap={16}>
              <Card withBorder className="grow">
                {log.latest.join(" ")}
              </Card>
              <Flex>
                <Button disabled={currentScene.type === SceneType.COMBAT} size="xl" onClick={onClickJump}>
                  Jump
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Stack>
      </Container>
    </GameStateContext.Provider>
  );
};

export default Game;
