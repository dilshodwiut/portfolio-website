import * as React from "react";
import FloatingIcons from "@/components/organisms/FloatingIcons/FloatingIcons";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloperIcon/AnimatedDeveloperIcon";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import TypeWriter from "@/components/molecules/TypeWriter/TypeWriter";
import Divider from "@/components/atoms/Divider/Divider";
import WelcomeMsg from "@/components/organisms/WelcomeMsg/WelcomeMsg";
import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      {/* <FloatingIcons /> */}
      <Wrapper>
        <Image
          src="/images/man-in-dark.jpg"
          alt="man in dark"
          width={1100}
          height={750}
          priority
        />

        <TypeWriter
          text="I am - "
          words={[
            "Software Engineer",
            "Functional Programmer",
            "Linux Enthusiast",
            "WIUT Student",
          ]}
          wait={1000}
        />

        <Divider />

        <div className={classes.welcome}>
          <AnimatedDeveloper />
          <WelcomeMsg />
        </div>
      </Wrapper>
    </section>
  );
}
