import * as React from "react";
import FloatingIcons from "@/components/molecules/FloatingIcons/FloatingIcons";
import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <FloatingIcons />
    </section>
  );
}
