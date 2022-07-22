import * as React from "react";
import clsx from "clsx";
import classes from "./List.module.scss";

interface ListProps {
  className?: string;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}

export default function List(props: ListProps) {
  const { className, children, direction } = props;

  return (
    <ul
      className={clsx(
        classes.list,
        direction === "vertical" ? classes.vertical : classes.horizontal,
        className
      )}
    >
      {children}
    </ul>
  );
}

List.defaultProps = {
  className: "",
  direction: "horizontal",
};
