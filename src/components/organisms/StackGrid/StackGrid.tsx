import * as React from "react";
import type { Image as ImageType } from "@/types/image";
import Image from "next/image";
import classes from "./StackGrid.module.scss";

interface Props {
  technologies: ImageType[];
}

export default function StackGrid(props: Props) {
  const { technologies } = props;

  return (
    <div className={classes.grid}>
      {technologies.map((technology) => (
        <span key={technology.alt}>
          <Image
            src={technology.src}
            alt={technology.alt}
            width="50%"
            height="50%"
          />
        </span>
      ))}
    </div>
  );
}
