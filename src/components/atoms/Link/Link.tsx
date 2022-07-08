import * as React from "react";
import { useRouter } from "next/router";
import classes from "./Link.module.scss";
import HandDrawnPaths from "../SVGs/HandDrawnPaths";

interface LinkProps {
  children: string;
  href: string;
  icon?: React.ReactNode;
  target?: "_self" | "_blank";
  onClick?: () => void;
  isCTA?: boolean;
  downloadable?: boolean;
  type?: "default" | "nav";
}

export default function Link(props: LinkProps) {
  const router = useRouter();

  const { href, target, isCTA, downloadable, type, children, icon, onClick } =
    props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <span className={classes.link} onClick={onClick}>
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={isCTA ? classes.cta : ""}
        download={downloadable}
      >
        {children}
        {icon}
      </a>

      {type === "nav" && `/${children.toLocaleLowerCase()}` === router.route ? (
        <HandDrawnPaths route={router.route} />
      ) : null}
    </span>
  );
}

Link.defaultProps = {
  icon: null,
  target: "_self",
  onClick: () => {},
  isCTA: false,
  downloadable: false,
  type: "default",
};
