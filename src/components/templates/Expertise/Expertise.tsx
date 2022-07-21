import * as React from "react";
import StackGrid from "@/components/organisms/StackGrid/StackGrid";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Expertise.module.scss";

export default function Expertise() {
  return (
    <Wrapper>
      <div className={classes.stack}>
        <h1>My Expertise</h1>
        <StackGrid />
      </div>
    </Wrapper>
  );
}
