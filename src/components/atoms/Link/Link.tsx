import styles from "./Link.module.scss";
import { useRouter } from "next/router";
import HandDrawnPaths from "../SVGs/HandDrawnPaths";

interface LinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  openOnNewTab?: boolean;
  onClick?: () => void;
  isCTA?: boolean;
  downloadable?: boolean;
  type?: "default" | "nav";
}

enum Target {
  Self = "_self",
  Blank = "_blank",
}

export default function Link(props: LinkProps) {
  const router = useRouter();

  const { href, openOnNewTab, isCTA, downloadable, type } = props;

  return (
    <li className={styles.link}>
      <a
        href={href}
        target={openOnNewTab ? Target.Blank : Target.Self}
        className={isCTA ? styles.cta : ""}
        download={downloadable}
      >
        {props.name}
        {props.icon}
      </a>

      {type === "nav" && "/" + props.name.toLowerCase() === router.route ? (
        <HandDrawnPaths route={router.route} />
      ) : null}
    </li>
  );
}
