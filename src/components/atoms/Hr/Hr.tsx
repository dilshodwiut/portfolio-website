import clsx from "clsx";
import * as React from "react";
import classes from "./Hr.module.scss";

export default function Hr() {
  return <hr className={clsx(classes.hr, classes.stars)} />;
}
