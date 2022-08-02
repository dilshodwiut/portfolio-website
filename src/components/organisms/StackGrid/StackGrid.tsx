import * as React from "react";
import type { Image as ImageType } from "@/types/image";
import { useTrail, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import Image from "next/image";
import classes from "./StackGrid.module.scss";

interface Props {
  technologies: ImageType[];
}

export default function StackGrid(props: Props) {
  const { technologies } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const trail = useTrail(technologies.length, {
    from: { opacity: 0, scale: 0 },
    to: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 },
    config: { ...config.default, duration: 75 },
  });

  return (
    <div className={classes.grid} ref={ref}>
      {trail.map((style, i) => (
        <animated.span key={technologies[i].alt} style={style}>
          <Image
            src={technologies[i].src}
            alt={technologies[i].alt}
            width="50%"
            height="50%"
          />
        </animated.span>
      ))}
    </div>
  );
}
