import * as React from "react";
import classes from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>loading</div>
      <div className={classes.ring} />
    </div>
  );
}
