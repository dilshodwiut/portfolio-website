import * as React from "react";
import BrandLogo from "@/components/atoms/BrandLogo/BrandLogo";
import NavbarLinks from "@/components/molecules/NavbarLinks/NavbarLinks";
import NavbarActions from "@/components/molecules/NavbarActions/NavbarActions";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <Wrapper className="my-lg">
      <nav className={classes.navbar}>
        <BrandLogo href="/" className="mr-md" />
        <NavbarLinks />
        <NavbarActions />
      </nav>
    </Wrapper>
  );
}
