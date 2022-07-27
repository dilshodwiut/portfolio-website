import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";
import Paper from "./Paper";
import classes from "./Practices.module.scss";

export default function Practices() {
  return (
    <Wrapper>
      <div className={classes.practices}>
        <Title>Engineering Practices</Title>
        <Paper />
      </div>
    </Wrapper>
  );
}
