import * as React from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import { useSpring, animated, config } from "@react-spring/web";
import Link from "@/components/atoms/Link/Link";
import Heart from "@/components/atoms/SVGs/Heart";
import classes from "./Footer.module.scss";

export default function Footer() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { transform, opacity } = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: {
      transform: isVisible ? "translateX(0%)" : "translateX(100%)",
      opacity: isVisible ? 1 : 0,
    },
    loop: {
      reverse: false,
    },
    config: { ...config.wobbly, duration: 500 },
  });

  return (
    <footer ref={ref} className={classes.footer}>
      <animated.div style={{ transform, opacity }}>
        Made with <Heart isVisible={isVisible} /> by{" "}
        <Link href="https://github.com/dilshodwiut" target="_blank">
          Dilshod
        </Link>
      </animated.div>
    </footer>
  );
}
