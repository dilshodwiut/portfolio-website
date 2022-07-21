import * as React from "react";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloperIcon/AnimatedDeveloperIcon";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";
import TypeWriter from "@/components/molecules/TypeWriter/TypeWriter";
import Divider from "@/components/atoms/Divider/Divider";
import CountUp from "react-countup";
import StackGrid from "@/components/molecules/StackGrid/StackGrid";
import Card from "@/components/atoms/Card/Card";
import Slider from "../Slider/Slider";
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
      <Image
        src="/man-in-dark.jpg"
        alt="man in dark"
        width={1100}
        height={750}
        priority
      />

      <TypeWriter
        text="I am - "
        words={[
          "Software Engineer",
          "Functional Programmer",
          "Linux Enthusiast",
          "WIUT Student",
        ]}
        wait={1000}
      />

      <Divider />

      <div className={classes.stack}>
        <h1>My stack</h1>
        <StackGrid />
      </div>

      <Divider />

      <div className={classes.practices}>
        <h1>Engineering Practices</h1>
        <div>a white space where handwritten practices emerge</div>
      </div>

      <Divider />

      <div className={classes.stats}>
        <h1>Statistics</h1>
        <div className={classes.cards}>
          <Card className={classes.card}>
            <div className={classes.card__icon}>
              <Image src="/commit.png" width={64} height={64} />
            </div>
            <div className={classes.card__content}>
              <div className={classes.card__content__title}>Commits</div>
              <div className={classes.card__content__text}>
                <CountUp
                  enableScrollSpy
                  scrollSpyDelay={500}
                  scrollSpyOnce
                  end={4500}
                  separator=" "
                  duration={1}
                />
              </div>
            </div>
          </Card>

          <Card className={classes.card}>
            <div className={classes.card__icon}>
              <Image src="/development.png" width={64} height={64} />
            </div>
            <div className={classes.card__content}>
              <div className={classes.card__content__title}>
                Projects contributed
              </div>
              <div className={classes.card__content__text}>
                <CountUp
                  enableScrollSpy
                  scrollSpyDelay={500}
                  end={10}
                  separator=" "
                  duration={1}
                />
              </div>
            </div>
          </Card>

          <Card className={classes.card}>
            <div className={classes.card__icon}>
              <Image src="/dropper.png" width={64} height={64} />
            </div>
            <div className={classes.card__content}>
              <div className={classes.card__content__title}>
                Experience in years
              </div>
              <div className={classes.card__content__text}>
                <CountUp
                  enableScrollSpy
                  scrollSpyDelay={500}
                  end={1.5}
                  separator=" "
                  duration={1}
                  decimals={1}
                />
              </div>
            </div>
          </Card>

          <Card className={classes.card}>
            <div className={classes.card__icon}>
              <Image src="/office.png" width={64} height={64} />
            </div>
            <div className={classes.card__content}>
              <div className={classes.card__content__title}>
                Companies worked at
              </div>
              <div className={classes.card__content__text}>
                <CountUp
                  enableScrollSpy
                  scrollSpyDelay={500}
                  end={2}
                  separator=" "
                  duration={1}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Divider />

      <div className={classes.delivery}>
        <h1>How I deliver projects</h1>
        <div>react flow kicks in</div>
      </div>

      <Divider />

      <div className={classes.projects}>
        <h1>Clients</h1>
        <Slider />
        {/* <div className={classes.projects__list}>
          <div className={classes.project}>
            <div className={classes.project__title}>Title</div>
            <div className={classes.project__description}>description</div>
          </div>
        </div> */}
      </div>

      <div className={classes.container}>
        <AnimatedDeveloper />
        <Card
          className={clsx(
            classes.content,
            showCode ? classes.code : classes.view
          )}
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
                <span className={classes.unicode}>U+1F929 </span>
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
              <span className={classes.unicode}>U+1F578</span>
            ) : (
              <Image
                priority
                src="/spider-web.png"
                alt="spider web"
                width={29}
                height={29}
              />
            )}{" "}
            a better place{" "}
            {showCode ? (
              <>
                <span className={classes.unicode}>U+1F6E0 </span>
                <span className={classes.arrow}>&lt;</span>
                <span className={classes.keyword}>p</span>
                <span className={classes.arrow}>/&gt;</span>
              </>
            ) : (
              <Image
                priority
                src="/hammer-and-wrench.png"
                alt="hammer and wrench"
                width={29}
                height={29}
              />
            )}
          </p>
        </Card>
      </div>
    </Wrapper>
  );
}
