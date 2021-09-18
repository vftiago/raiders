/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { backgroundColor } from "./commons/colors";
import * as packageJson from "../package.json";
import Textbox from "./game-ui/Textbox";
import Header from "./game-ui/Header";
import { useReducer, useState } from "react";
import Button from "./game-ui/Button";
import MiniMap from "./game-ui/MiniMap";
import { pickWeightedItem } from "./utils/utils";
import { sceneTable } from "./game-data/scene-data/act-1/scene-data";

type GameAction = {
  type: "increment" | "decrement";
};

type GameState = {
  turn: number;
};

// function init(initialCount: number) {
//   return { turn: initialCount };
// }

function reducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case "increment":
      return { turn: state.turn + 1 };
    case "decrement":
      return { turn: state.turn - 1 };
    default:
      throw new Error();
  }
}

const initialState: GameState = {
  turn: 0,
};

function Game() {
  const [jumpButtonDisabled, setJumpButtonDisabled] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  const currentScene = pickWeightedItem(sceneTable);

  const handleSceneEnd = () => {
    setJumpButtonDisabled(false);
  };

  const { turn } = state;

  return (
    <div css={wrapperStyle}>
      <div css={containerStyle}>
        <Header name={packageJson.name} version={packageJson.version}></Header>
        {/* <MiniMap currentLevel={turn}></MiniMap> */}
        <main css={mainStyle}>
          <div css={screenStyle}></div>
          <Textbox
            currentScene={currentScene}
            handleSceneEnd={handleSceneEnd}
          ></Textbox>
        </main>
        <section css={footerButtonContainer}>
          <Button
            disabled={jumpButtonDisabled}
            primary
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            JUMP!
          </Button>
        </section>
      </div>
    </div>
  );
}

const screenStyle = css`
  display: flex;
  justify-content: center;
  color: rgb(250, 145, 15);
  background-color: rgb(7, 7, 7);
  height: 100%;
`;

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  color: rgb(250, 145, 15);
  background-color: rgb(7, 7, 7);
  height: 100%;
`;

const containerStyle = css`
  display: flex;
  width: 1025px;
  flex-direction: column;
  padding: 16px 32px;
  background-color: ${backgroundColor};
`;

const mainStyle = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const footerButtonContainer = css`
  display: flex;
  justify-content: flex-end;
`;

export default Game;
