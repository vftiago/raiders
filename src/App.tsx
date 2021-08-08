/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { backgroundColor } from "./commons/colors";
import * as packageJson from "../package.json";
import Textbox from "./game-ui/Textbox";
import Header from "./game-ui/Header";
import { useState } from "react";
import Button from "./game-ui/Button";
import MiniMap from "./game-ui/MiniMap";
import { pickWeightedItem } from "./utils/utils";
import { sceneTable } from "./game-data/scene-data/act-1/scene-data";

function App() {
  const [turn, setTurn] = useState(0);

  const currentScene = pickWeightedItem(sceneTable);

  return (
    <div css={wrapperStyle}>
      <div css={containerStyle}>
        <Header name={packageJson.name} version={packageJson.version}></Header>
        <MiniMap currentLevel={turn}></MiniMap>
        <main css={mainStyle}>
          <Textbox currentScene={currentScene}></Textbox>
        </main>
        <section css={footerButtonContainer}>
          <Button
            primary
            onClick={() => {
              setTurn(turn + 1);
            }}
          >
            JUMP!
          </Button>
        </section>
      </div>
    </div>
  );
}

const wrapperStyle = css`
  display: flex;
  justify-content: center;
`;

const containerStyle = css`
  display: flex;
  width: 800px;
  flex-direction: column;
  padding: 16px 32px;
  background-color: ${backgroundColor};
  div {
    margin-bottom: 40px;
  }
`;

const mainStyle = css`
  color: red;
`;

const footerButtonContainer = css`
  display: flex;
  justify-content: flex-end;
`;

export default App;
