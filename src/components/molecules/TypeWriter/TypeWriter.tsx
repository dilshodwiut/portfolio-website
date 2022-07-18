import * as React from "react";
import useTypeWriter from "src/hooks/useTypeWriter";
import classes from "./TypeWriter.module.scss";

interface Props {
  text: string;
  words: string[];
  wait: number;
}

export default function TypeWriter(props: Props) {
  const { text, words, wait } = props;

  const output = useTypeWriter({ words, wait });

  return (
    <div className={classes.container}>
      <h1>
        {text} {output}
        <span className={classes.cursor}>|</span>
      </h1>
    </div>
  );
}
