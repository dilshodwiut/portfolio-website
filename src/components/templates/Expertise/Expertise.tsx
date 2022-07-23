import * as React from "react";
import StackGrid from "@/components/organisms/StackGrid/StackGrid";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import type { Image } from "@/types/image";
import classes from "./Expertise.module.scss";

interface Props {
  technologies: Image[];
}

export default function Expertise(props: Props) {
  const { technologies } = props;

  return (
    <Wrapper>
      <div className={classes.stack}>
        <h1>My Expertise</h1>
        <StackGrid technologies={technologies} />
      </div>
    </Wrapper>
  );
}
