import * as React from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import { useSprings, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import classes from "./Practices.module.scss";

const practices = [
  {
    name: "Data Structures",
    rotation: -20,
    x: 0,
    y: 4.5,
  },
  {
    name: "Algorithms",
    rotation: 0,
    x: 1,
    y: 0,
  },
  {
    name: "Design Patterns",
    rotation: 25,
    x: -2,
    y: 5,
  },
  {
    name: "Software Architecture",
    rotation: 15,
    x: 3.5,
    y: 1.5,
  },
  {
    name: "Agile",
    rotation: -15,
    x: 1,
    y: -1.5,
  },
  {
    name: "Scrum",
    rotation: 20,
    x: 1,
    y: -2,
  },
  {
    name: "Test Driven Development",
    rotation: -50,
    x: 3,
    y: 7,
  },
  {
    name: "Kanban",
    rotation: -1,
    x: 0.5,
    y: 5,
  },
  {
    name: "Jira",
    rotation: 10,
    x: 0,
    y: 2.5,
  },
  {
    name: "Googling",
    rotation: -5,
    x: 2,
    y: -1.5,
  },
  {
    name: "FP",
    rotation: 0,
    x: -1,
    y: 2,
  },
  {
    name: "OOP",
    rotation: 0,
    x: 1,
    y: 2,
  },
  {
    name: "Documentation",
    rotation: 0,
    x: 0.5,
    y: -2,
  },
  {
    name: "Flux Architecture",
    rotation: -10,
    x: 4.5,
    y: -2,
  },
  {
    name: "Clean code",
    rotation: 30,
    x: -3,
    y: 6.5,
  },
  {
    name: "Dry",
    rotation: -20,
    x: 1,
    y: 3,
  },
  {
    name: "KISS",
    rotation: 90,
    x: 0,
    y: 0,
  },
  {
    name: "YAGNI",
    rotation: 10,
    x: 4,
    y: -4,
  },
  {
    name: "SOLID",
    rotation: 15,
    x: -1,
    y: 3,
  },
  {
    name: "SSR",
    rotation: 0,
    x: 0,
    y: 3,
  },
  {
    name: "SPA",
    rotation: -90,
    x: 0,
    y: 0,
  },
  {
    name: "Mobile First",
    rotation: 80,
    x: 2,
    y: -3.5,
  },
  {
    name: "Debugging",
    rotation: 0,
    x: -7,
    y: 2.5,
  },
  {
    name: "Responsive Web Design",
    rotation: 5,
    x: 9,
    y: 2,
  },
];

export default function Practices() {
  return (
    <Wrapper>
      <div className={classes.practices}>
        <h1>Engineering Practices</h1>
        <Paper />
      </div>
    </Wrapper>
  );
}

function Paper() {
  const [springs, api] = useSprings(practices.length, (index) => ({
    transform: "rotate(0deg) translate(100em, 100em)",
  }));

  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    if (isVisible) {
      api.start((i) => {
        const { rotation, x, y } = practices[i];
        return {
          transform: `rotate(${rotation}deg) translate(${x}em, ${y}em)`,
        };
      });
    }
    return () => {
      api.stop();
    };
  }, [springs, api, isVisible]);

  return (
    <div ref={ref} className={classes.paper}>
      {practices.map((practice, index) => (
        <animated.span key={practice.name} style={springs[index]}>
          {practice.name}
        </animated.span>
      ))}
    </div>
  );
}
