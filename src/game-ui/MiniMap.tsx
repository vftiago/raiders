/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

type Section = { name: string };

type Map = Section[];

function MiniMap({
  actMap = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "11" },
    { name: "12" },
    { name: "13" },
    { name: "14" },
  ],
  currentLevel,
}: {
  actMap?: Map;
  currentLevel: number;
}) {
  const buildMiniMap = (actMap: Map) => {
    return actMap.map((section, index) => {
      return (
        <div key={index} css={sectorContainerStyle}>
          <span css={sectorStyle}>
            {index === currentLevel ? "here" : section.name}
          </span>
          {index !== actMap.length - 1 ? <span css={connector}></span> : null}
        </div>
      );
    });
  };

  return <section css={minimapStyle}>{buildMiniMap(actMap)}</section>;
}

const sectorStyle = css`
  height: 50px;
  width: 50px;
  background-color: grey;
  border: 5px solid darkgrey;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const connector = css`
  height: 50px;
  width: 25px;
  display: flex;
  align-items: center;
  ::after {
    content: "";
    height: 5px;
    background-color: grey;
    width: 100%;
  }
`;

const sectorContainerStyle = css`
  display: flex;
`;

const minimapStyle = css`
  display: flex;
  padding: 8px 0;
  width: 100%;
`;

export default MiniMap;
