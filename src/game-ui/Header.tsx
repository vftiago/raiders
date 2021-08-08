/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

function Card({ name, version }: { name: string; version: string }) {
  return (
    <header css={headerStyle}>
      <p css={subtitleStyle}>
        {name}: {version}
      </p>
    </header>
  );
}

const headerStyle = css`
  display: flex;
  flex-direction: column;
`;

const subtitleStyle = css`
  color: red;
`;

export default Card;
