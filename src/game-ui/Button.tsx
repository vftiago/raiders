/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { ReactNode } from "react";

function Button({
  children,
  circle,
  onClick,
}: {
  children: ReactNode;
  circle: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} css={constructButtonStyles()}>
      {children}
    </button>
  );
}

const constructButtonStyles = () => {
  return css`
    cursor: pointer;
    height: 100px;
    width: 100px;
    background-color: #ff5f1f;
    color: white;
    border: none;
  `;
};

const buttonStyle = css`
  cursor: pointer;
  height: 100px;
  width: 100px;
  background-color: #ff5f1f;
  color: white;
  border: none;
`;

const circleButtonStyle = css`
  border-radius: 50%;
`;

export default Button;
