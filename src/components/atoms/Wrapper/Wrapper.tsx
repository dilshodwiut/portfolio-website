import classes from "./Wrapper.module.scss";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps): JSX.Element {
  return <div className={classes.wrapper}>{children}</div>;
}
