import * as React from "react";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloperIcon/AnimatedDeveloperIcon";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import TypeWriter from "@/components/molecules/TypeWriter/TypeWriter";
import Divider from "@/components/atoms/Divider/Divider";
import StackGrid from "@/components/organisms/StackGrid/StackGrid";
import Slider from "../Slider/Slider";
import Stats from "../Stats/Stats";
import WelcomeMsg from "../WelcomeMsg/WelcomeMsg";
import classes from "./HeroContent.module.scss";

export default function HeroContent() {
  return (
    <Wrapper>
      <Image
        src="/man-in-dark.jpg"
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

      <div className={classes.stack}>
        <h1>My Expertise</h1>
        <StackGrid />
      </div>

      <Divider />

      <div className={classes.practices}>
        <h1>Engineering Practices</h1>
        <div>a white space where handwritten practices emerge</div>
      </div>

      <Divider />

      <div className={classes.stats}>
        <h1>Statistics</h1>
        <Stats />
      </div>

      <Divider />

      <div className={classes.delivery}>
        <h1>How I deliver projects</h1>
        <div>react flow kicks in</div>
      </div>

      <Divider />

      <div className={classes.projects}>
        <h1>Clients</h1>
        <Slider />
        {/* <div className={classes.projects__list}>
          <div className={classes.project}>
            <div className={classes.project__title}>Title</div>
            <div className={classes.project__description}>description</div>
          </div>
        </div> */}
      </div>

      <div className={classes.container}>
        <AnimatedDeveloper />
        <WelcomeMsg />
      </div>
    </Wrapper>
  );
}
