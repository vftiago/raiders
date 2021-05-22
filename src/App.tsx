/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { backgroundColor } from "./commons/colors";
import * as packageJson from "../package.json";
import Card from "./game-ui/Card";
import Header from "./Header";
import { useState } from "react";
import Button from "./game-ui/Button";

function App() {
  const [turn, setTurn] = useState(0);

  return (
    <div css={containerStyle}>
      <Header name={packageJson.name} version={packageJson.version}></Header>
      <main css={mainStyle}>
        <Card></Card>
        <Button
          circle
          onClick={() => {
            setTurn(turn + 1);
          }}
        >
          End turn ({turn})
        </Button>
      </main>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  background-color: ${backgroundColor};
`;

const mainStyle = css`
  color: red;
`;
const subtitleStyle = css`
  color: red;
`;

export default App;
