import * as React from "react";
import type { Stats as StatsType } from "@/types/stats";
import Stats from "@/components/organisms/Stats/Stats";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Statistics.module.scss";

interface Props {
  stats: StatsType[];
}

export default function Statistics(props: Props) {
  const { stats } = props;

  return (
    <Wrapper>
      <div className={classes.stats}>
        <h1>Statistics</h1>
        <Stats stats={stats} />
      </div>
    </Wrapper>
  );
}
