import * as React from "react";
import { SizedImage } from "@/types/image";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import classes from "./Slider.module.scss";

interface Props {
  clients: SizedImage[];
}

export default function Slider(props: Props) {
  const { clients } = props;
  return (
    <div className={classes.slider}>
      <div className={classes.slider__track}>
        {clients.concat(clients).map(({ id, src, alt, width, height }) => (
          <div key={id} className={classes.slider__track__item}>
            <Card className={classes.slider__track__item__wrapper}>
              <Image src={src} width={width} height={height} alt={alt} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
