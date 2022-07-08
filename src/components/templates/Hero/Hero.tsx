import * as React from "react";
// import HeroCurve from "@/components/atoms/SVGs/HeroCurve/HeroCurve";
import Navbar from "@/components/organisms/Navbar/Navbar";
import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <Navbar />
      {/* HeroCurve */}
    </section>
  );
}
