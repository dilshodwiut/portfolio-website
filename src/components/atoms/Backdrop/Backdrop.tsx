import * as React from "react";
import classes from "./Backdrop.module.scss";

interface Props {
  children: React.ReactNode;
  // isVisible: boolean;
}

export default function Backdrop(props: Props) {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
}
