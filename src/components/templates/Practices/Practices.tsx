import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Practices.module.scss";

export default function Practices() {
  return (
    <Wrapper>
      <div className={classes.practices}>
        <h1>Engineering Practices</h1>
        <div>a white space where handwritten practices emerge</div>
      </div>
    </Wrapper>
  );
}
