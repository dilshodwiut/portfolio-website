import Link from "@/components/atoms/Link/Link";
import Heart from "@/components/atoms/SVGs/Heart";
import classes from "./Footer.module.scss";
import { useRef } from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import { useSpring, animated, config } from "@react-spring/web";

export default function Footer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  console.log(`Render Section Footer`, { isVisible });

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0%)" : "translateY(-100%)",
    },
    config: { ...config.wobbly, duration: 500 },
  });

  return (
    <animated.footer
      ref={ref}
      className={classes.footer}
      style={{ opacity, transform }}
    >
      <div>
        Made with {<Heart />} by{" "}
        <Link href="https://github.com/dilshodwiut" target="_blank">
          Dilshod
        </Link>
      </div>
    </animated.footer>
  );
}
