import * as React from "react";
import clsx from "clsx";
import classes from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card(props: CardProps) {
  const { children, className, onMouseEnter, onMouseLeave } = props;

  return (
    <div
      className={clsx(classes.container, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: "",
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};
