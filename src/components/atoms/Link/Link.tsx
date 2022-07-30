import * as React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import HandDrawnPaths from "../SVGs/HandDrawnPaths";
import classes from "./Link.module.scss";

interface LinkProps {
  children: string;
  href: string;
  icon?: React.ReactNode;
  target?: "_self" | "_blank";
  onClick?: () => void;
  downloadable?: boolean;
  type?: "default" | "nav";
}

export default function CustomLink(props: LinkProps) {
  const router = useRouter();

  const { href, target, downloadable, type, children, icon, onClick } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <span
      className={clsx(
        classes.link,
        type === "nav" ? classes.hover : classes.underline
      )}
      onClick={onClick}
    >
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
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

CustomLink.defaultProps = {
  icon: null,
  target: "_self",
  onClick: () => {},
  downloadable: false,
  type: "default",
};
