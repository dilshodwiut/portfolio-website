import * as React from "react";
import type { Stats as StatsType } from "@/types/stats";
import { useTrail, animated } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import CountUp from "react-countup";
import IntersectedCountUp from "./IntersectedCountUp";
import classes from "./Stats.module.scss";

const AnimatedCard = animated(Card);

interface Props {
  stats: StatsType[];
}

export default function Stats(props: Props) {
  const { stats } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const trail = useTrail(stats.length, {
    from: { opacity: 0, transform: "translateY(100%)" },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    },
  });

  return (
    <div className={classes.cards} ref={ref}>
      {stats.map((stat, i) => (
        <AnimatedCard key={stat.id} className={classes.card} style={trail[i]}>
          <div className={classes.card__icon}>
            <Image
              src={stat.icon.src}
              width={64}
              height={64}
              alt={stat.icon.alt}
              layout="responsive"
            />
          </div>
          <div className={classes.card__content}>
            <div className={classes.card__content__title}>{stat.name}</div>
            <div className={classes.card__content__text}>
              <CountUp
                enableScrollSpy
                scrollSpyDelay={500}
                scrollSpyOnce
                end={stat.totalNumber}
                separator=" "
                duration={2}
                decimals={Number.isInteger(stat.totalNumber) ? 0 : 1}
                suffix={stat.name === "Commits" ? " +" : ""}
              >
                {({ countUpRef, start }) => (
                  <IntersectedCountUp countUpRef={countUpRef} start={start} />
                )}
              </CountUp>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}
