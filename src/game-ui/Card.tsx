/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

function Card() {
  return <div css={containerStyle}></div>;
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
  padding: 16px 32px;
  background-color: grey;
`;

const mainStyle = css`
  color: red;
`;
const subtitleStyle = css`
  color: red;
`;

export default Card;
