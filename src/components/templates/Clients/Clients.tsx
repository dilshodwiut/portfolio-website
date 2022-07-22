import * as React from "react";
import Slider from "@/components/organisms/Slider/Slider";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Clients.module.scss";

export default function Clients() {
  return (
    <Wrapper>
      <div className={classes.clients}>
        <h1>Clients</h1>
        <Slider />
      </div>
    </Wrapper>
  );
}
