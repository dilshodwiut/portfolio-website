import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Practices.module.scss";

export default function Practices() {
  return (
    <Wrapper>
      <div className={classes.practices}>
        <h1>Engineering Practices</h1>
        <div className={classes.paper}>
          <span>Data Structures</span>
          <span>Algorithms</span>
          <span>Design Patterns</span>
          <span>Software Architecture</span>
          <span>Agile</span>
          <span>Scrum</span>
          <span>Test Driven Development</span>
          <span>Kanban</span>
          <span>Jira</span>
          <span>Googling</span>
          <span>FP</span>
          <span>OOP</span>
          <span>Documentation</span>
          <span>Flux Architecture</span>
          <span>Clean Code</span>
          <span>DRY</span>
          <span>KISS</span>
          <span>YAGNI</span>
          <span>SOLID</span>
          <span>SSR</span>
          <span>SPA</span>
          <span>Mobile first</span>
          <span>Debugging</span>
          <span>Responsive Web Design</span>
        </div>
      </div>
    </Wrapper>
  );
}
