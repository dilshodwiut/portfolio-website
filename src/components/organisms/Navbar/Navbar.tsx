import styles from "./Navbar.module.scss";
import BrandLogo from "@/components/atoms/BrandLogo/BrandLogo";
import NavbarLinks from "@/components/molecules/NavbarLinks/NavbarLinks";
import NavbarActions from "@/components/molecules/NavbarActions/NavbarActions";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <BrandLogo href="/" />
      <NavbarLinks />
      <NavbarActions />
    </nav>
  );
}
