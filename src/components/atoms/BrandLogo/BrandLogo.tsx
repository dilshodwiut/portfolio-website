import styles from "./BrandLogo.module.scss";

interface BrandLogoProps {
  className?: string;
  href: string;
}

export default function BrandLogo({ href }: BrandLogoProps) {
  return (
    <div className={styles.brandLogo}>
      <a href={href}>DILSHOD</a>
    </div>
  );
}
