import * as React from "react";
// import { colors } from "src/theme/palette";
import { useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  // size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  // isLoading?: boolean;
  // isOutlined?: boolean;
  // isRounded?: boolean;
  disableStyles?: boolean;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button(props: ButtonProps) {
  const [{ bgColor, transform }, set] = useSpring(() => ({
    bgColor: "transparent",
    transform: "translate3d(0,0px,0)",
    config: { ...config.molasses, duration: 25 },
  }));

  const {
    type,
    isDisabled,
    children,
    onClick,
    disableStyles,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    className,
  } = props;

  return (
    <animated.button
      onMouseEnter={(e) => {
        if (typeof onMouseEnter === "function") {
          onMouseEnter(e);
        }
        // set({ bgColor: colors.red });
      }}
      onMouseLeave={(e) => {
        if (typeof onMouseLeave === "function") {
          onMouseLeave(e);
        }
        // set({ bgColor: "transparent" });
      }}
      onMouseDown={(e) => {
        if (typeof onMouseDown === "function") {
          onMouseDown(e);
        }
        set({ transform: "translate3d(0,3px,0)" });
      }}
      onMouseUp={(e) => {
        if (typeof onMouseUp === "function") {
          onMouseUp(e);
        }
        set({ transform: "translate3d(0,0px,0)" });
      }}
      style={{ backgroundColor: bgColor, transform }}
      type={type}
      disabled={isDisabled}
      className={clsx(disableStyles ? "" : classes.button, className)}
      onClick={onClick}
    >
      {children}
    </animated.button>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
  disableStyles: false,
  className: "",
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
};
