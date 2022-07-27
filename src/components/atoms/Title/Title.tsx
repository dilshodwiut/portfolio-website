import clsx from "clsx";
import * as React from "react";
import classes from "./Title.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  align?: "left" | "center" | "right";
  noMargin?: boolean;
  noPadding?: boolean;
  style?: React.CSSProperties;
};

export default function Title(props: Props) {
  const { children, className, size, align, noMargin, noPadding, style } =
    props;

  return (
    <h1
      className={clsx(
        classes.title,
        classes[align!],
        classes[size!],
        className,
        noMargin ? classes.noMargin : classes.margin,
        noPadding ? classes.noPadding : classes.padding
      )}
      style={style}
    >
      {children}
    </h1>
  );
}

Title.defaultProps = {
  className: "",
  size: "lg",
  align: "center",
  noMargin: false,
  noPadding: false,
  style: {},
};
