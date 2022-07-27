import * as React from "react";
import type { Stats as StatsType } from "@/types/stats";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import CountUp from "react-countup";
import IntersectedCountUp from "./IntersectedCountUp";
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
