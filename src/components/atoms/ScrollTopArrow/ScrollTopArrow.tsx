import * as React from "react";
import classes from "./ScrollTopArrow.module.scss";

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = React.useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      if (!showScroll && target.scrollTop > 400) {
        setShowScroll(true);
      } else if (showScroll && target.scrollTop <= 400) {
        setShowScroll(false);
      }
    },
    [showScroll]
  );

  const scrollTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    document.body.addEventListener("scroll", checkScrollTop);

    return () => {
      document.body.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <svg
      className={classes.scrollTop}
      onClick={scrollTop}
      style={{ display: showScroll ? "block" : "none" }}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="8" y2="12" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="16" y1="12" x2="12" y2="8" />
    </svg>
  );
}
