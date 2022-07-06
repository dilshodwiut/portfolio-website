import Ul from "@/components/atoms/Ul/Ul";
import { IconDownload } from "@tabler/icons";
import Button from "@/components/atoms/Button/Button";
import downloadFile from "@/utils/downloadFile";
import { useSpring, animated, config, easings } from "@react-spring/web";
import { useState } from "react";

export default function NavbarActions() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const [{ transform }, set] = useSpring(() => ({
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
        onClick={(e) => downloadFile(e, "Dilshod Ramatilloev.pdf")}
        onMouseEnter={(e) => {
          setAnimationStarted(true);
        }}
        onMouseLeave={(e) => {
          setAnimationStarted(false);
          // set({ transform: "translateY(0px)" });
        }}
        onMouseDown={(e) => {
          setAnimationStarted(false);
        }}
        onMouseUp={(e) => {
          setAnimationStarted(true);
        }}
      >
        Download CV{" "}
        {
          <animated.div
            style={
              animationStarted
                ? { transform }
                : { transform: "translateY(0px)" }
            }
          >
            <IconDownload
              size={20}
              color={"#fff"}
              stroke={3}
              strokeLinejoin="miter"
            />
          </animated.div>
        }
      </Button>
    </Ul>
  );
}
