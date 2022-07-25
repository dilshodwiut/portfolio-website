import * as React from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import { useSpring, animated, config } from "@react-spring/web";
import Link from "@/components/atoms/Link/Link";
import Heart from "@/components/atoms/SVGs/Heart";
import clsx from "clsx";
import Curve from "@/components/atoms/SVGs/Curve/Curve";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.99,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const { transform, opacity } = useSpring({
    from: { transform: "translateY(1rem)", opacity: 0 },
    to: {
      transform: isVisible ? "translateY(0%)" : "translateY(1rem)",
      opacity: isVisible ? 1 : 0,
    },
    config: { ...config.slow, duration: 800 },
  });

  return (
    <footer ref={ref} className={clsx(classes.footer, className)}>
      <Wrapper>
        {/* <Curve position="top" fill="#212121" style={{ top: "-170%" }} /> */}
        <div className={classes.footerContent}>
          <animated.div style={{ transform, opacity }}>
            Made with <Heart isVisible={isVisible} /> by{" "}
            <Link href="https://github.com/dilshodwiut" target="_blank">
              Dilshod
            </Link>
          </animated.div>
        </div>
      </Wrapper>
    </footer>
  );
}

Footer.defaultProps = {
  className: "",
};
