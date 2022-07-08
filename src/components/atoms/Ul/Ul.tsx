import classes from "./Ul.module.scss";

interface UlProps {
  className?: string;
  children: React.ReactNode;
}

export default function Ul(props: UlProps) {
  return <ul className={classes.ul}>{props.children}</ul>;
}
