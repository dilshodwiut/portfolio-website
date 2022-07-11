import * as React from "react";
import { useSprings, config } from "@react-spring/web";
import randomize, { randomizeInitialLocation } from "src/functions/randomize";
import classes from "./Float.module.scss";

const WIDTH = 375;
const HEIGHT = 667;

export default function Float({ children }) {
  const [springs, api] = useSprings(React.Children.count(children), (index) => {
    const [initialX, initialY] = randomizeInitialLocation(WIDTH, HEIGHT);
    return {
      transform: `translate(${initialX}px, ${initialY}px)`,
      config: { ...config.molasses, duration: 60000 },
    };
  });

  React.useEffect(() => {
    const gen = randomize(WIDTH, HEIGHT);

    springs.forEach((spring, index) => {
      api.start((i) => {
        const { x, y } = gen.next().value;
        return {
          transform: `translate(${x}px, ${y}px)`,
        };
      });
    });

    const interval = setInterval(() => {
      springs.forEach((spring, index) => {
        api.start((i) => {
          const { x, y } = gen.next().value!;
          return { transform: `translate(${x}px, ${y}px)` };
        });
      });
    }, 60000);

    return () => {
      api.stop();
      clearInterval(interval);
    };
  }, [api, springs]);

  return (
    <div className={classes.container}>
      {springs.map((styles, index) => {
        const child = React.Children.toArray(children)[index];
        return React.cloneElement(child, { style: styles });
      })}
    </div>
  );
}
