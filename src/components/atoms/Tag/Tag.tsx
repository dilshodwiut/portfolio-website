import * as React from "react";
import clsx from "clsx";
import classes from "./Tag.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  // color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  color?: string;
}

export default function Tag(props: Props) {
  const { children, className, color } = props;

  return (
    <small className={clsx(classes.tag, classes.red, className)}>
      {children}
    </small>
  );
}

Tag.defaultProps = {
  className: "",
  // color: "primary",
  color: "red",
};
