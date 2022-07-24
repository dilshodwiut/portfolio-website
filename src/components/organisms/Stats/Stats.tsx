import * as React from "react";
import type { Stats as StatsType } from "@/types/stats";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import CountUp from "react-countup";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import classes from "./Stats.module.scss";

interface Props {
  stats: StatsType[];
}

export default function Stats(props: Props) {
  const { stats } = props;

  return (
    <div className={classes.cards}>
      {stats.map((stat) => (
        <Card key={stat.id} className={classes.card}>
          <div className={classes.card__icon}>
            <Image
              src={stat.icon.src}
              width={64}
              height={64}
              alt={stat.icon.alt}
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
              >
                {({ countUpRef, start }) => (
                  <IntersectedCountUp countUpRef={countUpRef} start={start} />
                )}
              </CountUp>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function IntersectedCountUp(props: {
  countUpRef: React.RefObject<any>;
  start: () => void;
}) {
  const { countUpRef, start } = props;

  const scrollSpyRef = React.useRef<boolean>(false);
  const entry = useIntersectionObserver(countUpRef, {});
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    if (isVisible && !scrollSpyRef.current) {
      start();
      scrollSpyRef.current = true;
    }
  }, [isVisible, start, scrollSpyRef]);

  return <span ref={countUpRef} />;
}
