/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Fragment, useState } from "react";
import { getParagraph } from "../game-data/scene-utils";
import { Scene } from "../game-data/types/scene";

function Textbox({
  currentScene,
  handleSceneEnd,
}: {
  currentScene: Scene;
  handleSceneEnd: () => void;
}) {
  const [currentParagraph, setCurrentParagraph] = useState(
    getParagraph(currentScene),
  );

  const handleOptionClick = (next: string) => {
    if (next === "end") {
      handleSceneEnd();
    } else {
      setCurrentParagraph(getParagraph(currentScene, next));
    }
  };

  const options = currentParagraph.options;

  return (
    <Fragment>
      <span css={titleStyle}>{currentScene.title}</span>
      <div css={containerStyle}>
        <span>{currentParagraph.description}</span>
        <ol css={listStyle}>
          {options.map((option, i) => (
            <li
              onClick={() => {
                handleOptionClick(option.next);
              }}
              key={i}
              css={optionStyle}
            >{`${option.text}`}</li>
          ))}
        </ol>
      </div>
    </Fragment>
  );
}

const titleStyle = css`
  position: relative;
  top: 14px;
  left: 28px;
  border: 4px solid rgb(250, 145, 15);
  background-color: rgb(7, 7, 7);
  padding: 6px;
`;

const listStyle = css`
  padding-inline-start: 0px;
`;

const containerStyle = css`
  cursor: default;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 16px 32px;
  background-color: rgb(7, 7, 7);
  border: 4px solid rgb(250, 145, 15);
`;

const optionStyle = css`
  cursor: pointer;
  clear: both;
  list-style: none;
  counter-increment: i;
  margin-bottom: 10px;
  padding: 2px 0;
  &::before {
    content: counter(i) ". ";
    &:hover {
      background-color: rgb(250, 145, 15);
    }
  }
  &:hover {
    color: black;
    background: rgb(250, 145, 15);
  }
  &:active,
  &:focus {
    color: yellow;
  }
`;

export default Textbox;
