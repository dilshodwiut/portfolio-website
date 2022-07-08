import * as React from "react";
import { IconDownload } from "@tabler/icons";
import { useSpring, animated, config } from "@react-spring/web";
import downloadFile from "src/functions/downloadFile";
import Ul from "@/components/atoms/Ul/Ul";
import Button from "@/components/atoms/Button/Button";

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
    <Ul>
      <Button
        onClick={(event: React.MouseEvent) =>
          downloadFile(event, "Dilshod Ramatilloev.pdf")
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
        Download CV{" "}
        <animated.div
          style={
            animationStarted ? { transform } : { transform: "translateY(0px)" }
          }
        >
          <IconDownload
            size={20}
            color="#fff"
            stroke={3}
            strokeLinejoin="miter"
          />
        </animated.div>
      </Button>
    </Ul>
  );
}
