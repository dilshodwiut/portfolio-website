import * as React from "react";
import dynamic from "next/dynamic";
import { useSpring, animated, config } from "@react-spring/web";
import {
  randomizeRotationDegree,
  randomizeRotationDirection,
} from "src/functions/randomizers";
import Link from "next/link";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Astronaut.module.scss";

export default function Astronaut() {
  const Float = dynamic(() => import("@/components/molecules/Float/Float"), {
    ssr: false,
  });

  const [{ rotate }, api] = useSpring(() => ({
    rotate: "0deg",
    config: { ...config.slow, duration: 60000 },
    loop: {
      reverse: true,
    },
  }));

  React.useEffect(() => {
    api.start({
      rotate: `${randomizeRotationDirection() + randomizeRotationDegree()}deg`,
    });

    const interval = setInterval(() => {
      api.start({
        rotate: `${
          randomizeRotationDirection() + randomizeRotationDegree()
        }deg`,
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      <Float specialStyles={{ rotate }}>
        <animated.img
          src="/astronaut.png"
          alt="astronaut"
          width={200}
          style={{ rotate }}
        />
      </Float>

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
    </>
  );
}
