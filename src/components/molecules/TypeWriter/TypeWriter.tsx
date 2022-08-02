import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Title from "@/components/atoms/Title/Title";
import useTypeWriter from "src/hooks/useTypeWriter";
import clsx from "clsx";
import classes from "./TypeWriter.module.scss";

interface Props {
  text: string;
  words: string[];
  wait: number;
}

export default function TypeWriter(props: Props) {
  const { text, words, wait } = props;

  const output = useTypeWriter({ words, wait });

  const [spring, api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(50%)",
    config: { ...config.molasses, duration: 1000 },
  }));

  React.useEffect(() => {
    api.start({
      opacity: 1,
      transform: "translateY(0%)",
    });

    return () => {
      api.stop();
    };
  }, [api]);

  return (
    <animated.div className={classes.container} style={spring}>
      <Title align="left" animate={false}>
        {text} {output}
        <span className={clsx(classes.cursor, "xl")}>|</span>
      </Title>
    </animated.div>
  );
}
