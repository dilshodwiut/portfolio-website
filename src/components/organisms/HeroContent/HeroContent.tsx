import * as React from "react";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloper/AnimatedDeveloper";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import classes from "./HeroContent.module.scss";

export default function HeroContent() {
  const [showCode, setShowCode] = React.useState(true);
  const [showSwitch, setShowSwitch] = React.useState(false);

  const spring = useSpring({
    opacity: showSwitch ? 1 : 0,
    config: config.stiff,
  });

  return (
    <Wrapper>
      <div className={classes.container}>
        <div
          className={classes.content}
          onMouseEnter={() => {
            setShowSwitch(true);
          }}
          onMouseLeave={() => {
            setShowSwitch(false);
          }}
        >
          <animated.span className={classes.switch} style={spring}>
            <span className={classes.tooltip}>
              {showCode ? "Hide" : "Show"} code
            </span>
            <input
              type="checkbox"
              id="switch"
              onChange={() => {
                setShowCode((prev) => !prev);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="switch">Toggle</label>
          </animated.span>

          {showCode ? <h1>&lt;Hello /&gt;</h1> : <h1>Hello</h1>}
          <p>
            {showCode ? (
              <>
                <span className={classes.arrow}>&lt;</span>
                <span className={classes.keyword}>p</span>
                <span className={classes.arrow}>&gt; </span>
              </>
            ) : null}
            I make websites that people{" "}
            {showCode ? (
              <>
                <span className={classes.code}>U+1F929 </span>
                <span className={classes.arrow}>&lt;</span>
                <span className={classes.keyword}>p</span>
                <span className={classes.arrow}>/&gt;</span>
              </>
            ) : (
              <Image
                src="/star-struck.svg"
                alt="star struck face"
                width={29}
                height={29}
              />
            )}
          </p>
          <p>
            {showCode ? (
              <>
                <span className={classes.arrow}>&lt;</span>
                <span className={classes.keyword}>p</span>
                <span className={classes.arrow}>&gt; </span>
              </>
            ) : null}
            My aim is to make the{" "}
            {showCode ? (
              <span className={classes.code}>U+1F578</span>
            ) : (
              <Image
                src="/spider-web.png"
                alt="spider web"
                width={29}
                height={29}
              />
            )}{" "}
            a better place{" "}
            {showCode ? (
              <>
                <span className={classes.code}>U+1F6E0 </span>
                <span className={classes.arrow}>&lt;</span>
                <span className={classes.keyword}>p</span>
                <span className={classes.arrow}>/&gt;</span>
              </>
            ) : (
              <Image
                src="/hammer-and-wrench.png"
                alt="hammer and wrench"
                width={29}
                height={29}
              />
            )}
          </p>
        </div>
        <AnimatedDeveloper />
      </div>
    </Wrapper>
  );
}
