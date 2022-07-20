import * as React from "react";
import clsx from "clsx";
import classes from "./List.module.scss";

interface ListProps {
  className?: string;
  children: React.ReactNode;
}

export default function List(props: ListProps) {
  const { className, children } = props;

  return <ul className={clsx(classes.list, className)}>{children}</ul>;
}

List.defaultProps = {
  className: "",
};
