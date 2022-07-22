import clsx from "clsx";
import * as React from "react";
import classes from "./ListItem.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ListItem(props: Props) {
  const { children, className } = props;

  return <li className={clsx(classes.listItem, className)}>{children}</li>;
}

ListItem.defaultProps = {
  className: "",
};
