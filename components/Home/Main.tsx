import { animated, useSpring } from "react-spring";
import styles from "./Main.module.scss";

export default function Home() {
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <animated.button style={props} className={styles.cta}>
      <span>Welcome</span>
    </animated.button>
  );
}
