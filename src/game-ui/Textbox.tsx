/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { getParagraph } from "../game-data/scene-utils";
import { Scene } from "../game-data/types/scenes";

function Textbox({ currentScene }: { currentScene: Scene }) {
  const currentParagraph = getParagraph(currentScene);

  const options = currentParagraph.options;

  return (
    <div css={containerStyle}>
      <p>{currentScene.title}</p>
      <p>{currentParagraph.description}</p>
      {options.map((option, i) => (
        <p key={i} css={optionStyle}>{`${i + 1}. ${option.text}`}</p>
      ))}
    </div>
  );
}

const containerStyle = css`
  color: white;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 16px 32px;
  background-color: #313131;
  user-select: none;
`;

const optionStyle = css`
  cursor: pointer;
  &:hover {
    color: cyan;
  }
  &:active,
  &:focus {
    color: yellow;
  }
`;

export default Textbox;
