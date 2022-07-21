import * as React from "react";
import Slider from "@/components/organisms/Slider/Slider";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Projects.module.scss";

export default function Projects() {
  return (
    <Wrapper>
      <div className={classes.projects}>
        <h1>Clients</h1>
        <Slider />
        {/* <div className={classes.projects__list}>
          <div className={classes.project}>
            <div className={classes.project__title}>Title</div>
            <div className={classes.project__description}>description</div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}
