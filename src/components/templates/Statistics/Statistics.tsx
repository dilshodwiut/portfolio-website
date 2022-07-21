import * as React from "react";
import Stats from "@/components/organisms/Stats/Stats";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Statistics.module.scss";

export default function Statistics() {
  return (
    <Wrapper>
      <div className={classes.stats}>
        <h1>Statistics</h1>
        <Stats />
      </div>
    </Wrapper>
  );
}
