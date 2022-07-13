import * as React from "react";
import FloatingIcons from "@/components/organisms/FloatingIcons/FloatingIcons";
import HeroContent from "@/components/organisms/HeroContent/HeroContent";
import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <FloatingIcons />
      <HeroContent />
    </section>
  );
}
