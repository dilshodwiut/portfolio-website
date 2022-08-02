import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import BrandLogo from "@/components/atoms/BrandLogo/BrandLogo";
import NavbarLinks from "@/components/molecules/NavbarLinks/NavbarLinks";
import NavbarActions from "@/components/molecules/NavbarActions/NavbarActions";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-50%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)",
    },
    config: { ...config.molasses, duration: 1000 },
  });

  return (
    <Wrapper className="my-lg">
      <animated.nav className={classes.navbar} style={spring}>
        <BrandLogo href="/" className="mr-md" />
        <NavbarLinks />
        <NavbarActions />
      </animated.nav>
    </Wrapper>
  );
}
