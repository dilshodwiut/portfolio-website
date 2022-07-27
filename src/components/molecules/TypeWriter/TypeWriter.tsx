import * as React from "react";
import Title from "@/components/atoms/Title/Title";
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
      <Title align="left" style={{ width: "545px" }}>
        {text} {output}
        <span className={classes.cursor}>|</span>
      </Title>
    </div>
  );
}
