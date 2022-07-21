import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Delivery.module.scss";

export default function Delivery() {
  return (
    <Wrapper>
      <div className={classes.delivery}>
        <h1>How I deliver projects</h1>
        <div>react flow kicks in</div>
      </div>
    </Wrapper>
  );
}
