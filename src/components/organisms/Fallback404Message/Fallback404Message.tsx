import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Link from "next/link";
import classes from "./Fallback404Message.module.scss";

export default function Fallback404Message() {
  return (
    <Wrapper>
      <div className={classes.messageContainer}>
        <div className={classes.message}>
          <h1>404 Error</h1>
          <p>Don&apos;t panic and make sure to watch your oxygen levels.</p>
        </div>
        <div className={classes.messageLink}>
          <Link href="/">Return to safety</Link>
        </div>
      </div>
    </Wrapper>
  );
}
