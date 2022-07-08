import * as React from "react";
import clsx from "clsx";
import classes from "./Ul.module.scss";

interface UlProps {
  className?: string;
  children: React.ReactNode;
}

export default function Ul(props: UlProps) {
  const { className, children } = props;

  return <ul className={clsx(classes.ul, className)}>{children}</ul>;
}

Ul.defaultProps = {
  className: "",
};
