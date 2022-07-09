import * as React from "react";
import VSCode from "@/components/atoms/SVGs/Dev/VSCode";
import classes from "./FloatingIcons.module.scss";

export default function FloatingProgrammingIcons() {
  return (
    <div className={classes.container}>
      <VSCode />
      <VSCode />
      <VSCode />
      <VSCode />
      <VSCode />
    </div>
  );
}
