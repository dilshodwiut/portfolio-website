import * as React from "react";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import CountUp from "react-countup";
import classes from "./Stats.module.scss";

export default function Stats() {
  return (
    <div className={classes.cards}>
      <Card className={classes.card}>
        <div className={classes.card__icon}>
          <Image src="/commit.png" width={64} height={64} alt="commit icon" />
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
          <Image
            src="/development.png"
            width={64}
            height={64}
            alt="projects icon"
          />
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
          <Image
            src="/dropper.png"
            width={64}
            height={64}
            alt="experience icon"
          />
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
          <Image src="/office.png" width={64} height={64} alt="office icon" />
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
  );
}
