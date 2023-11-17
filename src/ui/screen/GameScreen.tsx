import { GameState } from "../../data/createGame";
import { GameScene } from "../../data/createSector";
import { ShipWeapon } from "../../data/domains/ship/ship";
import { SceneType } from "../../data/scenes/eventTable";
import CombatScreen from "./components/CombatScreen";
import EventScreen from "./components/EventScreen";
import { RewardScreen } from "./components/RewardScreen";

const GameScreen = ({
  gameState,
  currentScene,
  onClickFire,
}: {
  gameState: GameState;
  currentScene: GameScene;
  onClickFire: (fireParams: { weapon: ShipWeapon; targetEnemyId: string }) => void;
}) => {
  switch (currentScene.type) {
    case SceneType.COMBAT: {
      const {
        enemyEncounter: { enemies },
      } = currentScene;

      if (enemies.every(({ ship: enemyShip }) => enemyShip.shipChassis.currentHullIntegrity <= 0)) {
        return <RewardScreen enemies={enemies} />;
      }

      return (
        <CombatScreen
          enemies={enemies.filter(({ ship: enemyShip }) => enemyShip.shipChassis.currentHullIntegrity > 0)}
          playerShip={gameState.playerShip}
          onClickFire={onClickFire}
        />
      );
    }
    case SceneType.EVENT: {
      return <EventScreen eventScene={currentScene} />;
    }
    default: {
      return null;
    }
  }
};

export default GameScreen;
