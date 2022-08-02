import * as React from "react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import FloatingIcons from "@/components/organisms/FloatingIcons/FloatingIcons";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloperIcon/AnimatedDeveloperIcon";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import TypeWriter from "@/components/molecules/TypeWriter/TypeWriter";
import WelcomeMsg from "@/components/organisms/WelcomeMsg/WelcomeMsg";
import classes from "./Hero.module.scss";

export default function Hero() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { ...config.molasses, duration: 1000 },
  });

  const trail = useTrail(2, {
    from: {
      transform: "translateY(100px)",
      opacity: 0,
    },
    to: {
      transform: isVisible ? "translateY(0px)" : "translateY(100px)",
      opacity: isVisible ? 1 : 0,
    },
  });

  const AnimatedImage = animated(Image);

  return (
    <section className={classes.hero}>
      <Wrapper>
        <AnimatedImage
          src="/images/man-in-dark.jpg"
          alt="man in dark"
          width={1100}
          height={750}
          priority
          style={spring}
        />

        <TypeWriter
          text="I am - "
          words={[
            "Software Engineer",
            "Functional Programmer",
            "Linux Enthusiast",
          ]}
          wait={1000}
        />

        <div className={classes.welcome} ref={ref}>
          <AnimatedDeveloper style={trail[0]} />
          <WelcomeMsg style={trail[1]} />
        </div>
      </Wrapper>
    </section>
  );
}
