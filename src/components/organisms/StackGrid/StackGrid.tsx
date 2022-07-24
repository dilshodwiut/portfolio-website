import * as React from "react";
import type { Image as ImageType } from "@/types/image";
import Image from "next/image";
import { useTransition, animated, config } from "@react-spring/web";
import classes from "./StackGrid.module.scss";

interface Props {
  technologies: ImageType[];
}

export default function StackGrid(props: Props) {
  const { technologies } = props;

  const transitions = useTransition(technologies, {
    trail: 1500 / technologies.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return (
    <div className={classes.grid}>
      {transitions(({ opacity, scale }, item) => (
        <animated.span
          style={{
            opacity,
            scale,
            // transform: opacity
            //   .to((x) => x * 100 - 100)
            //   .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          <Image src={item.src} alt={item.alt} width="50%" height="50%" />
        </animated.span>
      ))}
    </div>
  );
}

// {technologies.map((technology) => (
//   <animated.span key={technology.alt} >
//     <Image
//       src={technology.src}
//       alt={technology.alt}
//       width="50%"
//       height="50%"
//     />
//   </animated.span>
// ))}
