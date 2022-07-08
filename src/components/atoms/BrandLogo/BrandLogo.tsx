import classes from "./BrandLogo.module.scss";

interface BrandLogoProps {
  className?: string;
  href: string;
}

export default function BrandLogo({ href }: BrandLogoProps) {
  return (
    <div className={classes.brandLogo}>
      <a href={href}>DILSHOD</a>
    </div>
  );
}
