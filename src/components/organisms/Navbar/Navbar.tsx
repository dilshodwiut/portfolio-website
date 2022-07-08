import classes from "./Navbar.module.scss";
import BrandLogo from "@/components/atoms/BrandLogo/BrandLogo";
import NavbarLinks from "@/components/molecules/NavbarLinks/NavbarLinks";
import NavbarActions from "@/components/molecules/NavbarActions/NavbarActions";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar(props: NavbarProps) {
  return (
    <Wrapper>
      <nav className={classes.navbar}>
        <BrandLogo href="/" />
        <NavbarLinks />
        <NavbarActions />
      </nav>
    </Wrapper>
  );
}
