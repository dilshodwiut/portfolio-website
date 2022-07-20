import clsx from "clsx";
import * as React from "react";
import classes from "./Divider.module.scss";

export default function Divider() {
  return <hr className={clsx(classes.divider, classes.stars)} />;
}
