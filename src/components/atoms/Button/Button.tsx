import styles from "./Button.module.scss";
import { useSpring, animated, config } from "@react-spring/web";
import { colors } from "src/theme/palette";

enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent) => void;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  isOutlined?: boolean;
  isRounded?: boolean;
  disableStyles?: boolean;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseUp?: (event: React.MouseEvent) => void;
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
      className={disableStyles ? "" : styles.button}
      onClick={() => {}} // onClick={onClick}
    >
      {children}
    </animated.button>
  );
}
