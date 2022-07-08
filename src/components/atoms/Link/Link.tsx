import classes from "./Link.module.scss";
import { useRouter } from "next/router";
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

  const { href, target, isCTA, downloadable, type } = props;

  return (
    <li className={classes.link}>
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={isCTA ? classes.cta : ""}
        download={downloadable}
      >
        {props.children}
        {props.icon}
      </a>

      {type === "nav" && "/" + props.children.toLowerCase() === router.route ? (
        <HandDrawnPaths route={router.route} />
      ) : null}
    </li>
  );
}
