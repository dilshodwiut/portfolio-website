import * as React from "react";
import useFloat from "src/hooks/useFloat";
import classes from "./Float.module.scss";

export default function Float({
  children,
}: {
  children: React.ReactElement[];
}) {
  const springs = useFloat(children);

  return (
    <div className={classes.container}>
      {springs.map((styles, index) => {
        const child = React.Children.toArray(children)[
          index
        ] as React.ReactElement;
        return React.cloneElement(child, { style: styles });
      })}
    </div>
  );
}
