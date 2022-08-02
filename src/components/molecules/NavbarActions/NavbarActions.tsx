import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import downloadFile from "src/functions/downloadFile";
import List from "@/components/atoms/List/List";
import Button from "@/components/atoms/Button/Button";
import classes from "./NavbarActions.module.scss";

export default function NavbarActions() {
  const [animationStarted, setAnimationStarted] = React.useState(false);

  const [{ transform }] = useSpring(() => ({
    transform: "translateY(0px)",
    from: {
      transform: "translateY(-3px)",
    },
    to: {
      transform: "translateY(3px)",
    },
    config: {
      ...config.molasses,
      duration: 1000,
    },
    loop: {
      reverse: true,
    },
  }));

  return (
    <List className={classes.navbar__actions}>
      <Button
        onClick={(event: React.MouseEvent) =>
          downloadFile(event, "/assets/Dilshod Ramatilloev.pdf")
        }
        onMouseEnter={() => {
          setAnimationStarted(true);
        }}
        onMouseLeave={() => {
          setAnimationStarted(false);
        }}
        onMouseDown={() => {
          setAnimationStarted(false);
        }}
        onMouseUp={() => {
          setAnimationStarted(true);
        }}
      >
        Download CV
        {/* <animated.span style={animationStarted ? { transform } : {}}>
          <IconDownload
            size={20}
            color="#fff"
            stroke={3}
            strokeLinejoin="miter"
          />
        </animated.span> */}
      </Button>
    </List>
  );
}
