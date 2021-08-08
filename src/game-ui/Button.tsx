/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { ReactNode } from "react";

function Button({
  children,
  circle,
  disabled,
  primary,
  onClick,
}: {
  children?: ReactNode;
  disabled?: boolean;
  circle?: boolean;
  primary?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={[
        buttonStyle,
        circle && circleButtonStyle,
        primary && primaryButtonStyle,
        disabled && disabledButtonStyle,
      ]}
    >
      {children}
    </button>
  );
}

const buttonStyle = css`
  @keyframes color {
    to {
      background-color: #ff1e1e;
    }
  }

  font-family: "Press Start 2P";
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  height: 100px;
  width: 120px;
  border-radius: 5px;
  border: none;
  animation-name: color;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  border-bottom: 5px solid #a52c2c;
  &:active {
    border-bottom: none;
    position: relative;
    top: 5px;
  }
`;

const circleButtonStyle = css`
  border-radius: 50%;
`;

const disabledButtonStyle = css`
  background-color: #a52c2c;
`;

const primaryButtonStyle = css`
  color: white;
  background-color: #cc4040;
`;

export default Button;
