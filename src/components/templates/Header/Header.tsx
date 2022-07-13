import * as React from "react";
import Curve from "@/components/atoms/SVGs/Curve/Curve";
import Navbar from "@/components/organisms/Navbar/Navbar";
import colors from "src/theme/palette";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <Curve rotate position="top" fill="#212121" />
      <Navbar />
    </header>
  );
}
