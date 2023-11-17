import { useCallback, useReducer, useRef } from "react";
import { Box, Flex, Tabs, Container, Stack, Button, Card } from "@mantine/core";
import buttonClick from "./assets/button-click.wav";
import playSound from "./utils/playSound";
import { gameReducer } from "./gameReducer";
import { INITIAL_GAME_STATE } from "./data/createGame";
import { ShipWeapon } from "./data/domains/ship/ship";
import { GameStateContext } from "./GameContext";
import CharacterCreation from "./ui/screen/forms/CharacterCreation";
import GameScreen from "./ui/screen/GameScreen";

const Game = () => {
  const buttonClickAudioElementRef = useRef(null);

  const [gameState, dispatch] = useReducer(gameReducer, INITIAL_GAME_STATE);

  const { log, currentSceneIndex, currentSectorIndex, sectors, rng, playerShip } = gameState;

  const currentScene = sectors[currentSectorIndex].scenes[currentSceneIndex];

  const onClickJump = useCallback(() => {
    dispatch({ type: "jump" });
  }, []);

  const onClickFire = useCallback(
    ({ weapon, targetEnemyId }: { weapon: ShipWeapon; targetEnemyId: string }) => {
      // this needs to go to the reducer
      const accuracyCheck = rng();
      const evasionCheck = rng();
      const damageRange = weapon.type === "energy" ? weapon.damage : weapon.currentAmmo.damage;
      const damage = Math.floor(rng() * (damageRange.max - damageRange.min + 1) + damageRange.min);

      dispatch({ type: "fire", weapon: weapon, targetEnemyId, accuracyCheck, evasionCheck, damage });
    },
    [rng],
  );

  return (
    <GameStateContext.Provider value={gameState}>
      <Container
        size="xl"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "0 auto",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <audio src={buttonClick} ref={buttonClickAudioElementRef} preload="auto" />

        <Box
          style={{
            flex: "1 1 auto",
            overflow: "auto",
            paddingBottom: "16px",
          }}
        >
          <Stack gap="16">
            <Flex py="16" justify="space-between">
              {sectors[currentSectorIndex].scenes.map((_, index) => {
                return <Box key={index} p="6" bg={index === currentSceneIndex ? "yellow.3" : "blue"} />;
              })}
            </Flex>
            <Tabs defaultValue="game" style={{ height: "calc(100% - 40px)" }}>
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
                <GameScreen gameState={gameState} currentScene={currentScene} onClickFire={onClickFire} />
              </Tabs.Panel>
              <Tabs.Panel p="0" value="character">
                <CharacterCreation />
              </Tabs.Panel>
              <Tabs.Panel p="0" value="ship">
                three!
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Box>

        <Card
          style={{
            flex: "0 0 auto",
            width: "100%",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Flex gap={16}>
            <Card withBorder className="grow bg-neutral-900">
              <Flex className="h-full items-center">{log.latest.join(" ")}</Flex>
            </Card>
            <Flex>
              <Button disabled={!playerShip.shipWarpDrive.isCharged} size="lg" onClick={onClickJump}>
                Jump
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </GameStateContext.Provider>
  );
};

export default Game;
