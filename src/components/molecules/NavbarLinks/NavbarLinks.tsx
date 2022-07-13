import * as React from "react";
import Ul from "@/components/atoms/Ul/Ul";
import Link from "@/components/atoms/Link/Link";

export default function NavbarLinks(): JSX.Element {
  return (
    <Ul>
      <li>
        <Link href="/portfolio" type="nav">
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/blog" type="nav">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/resources" type="nav">
          Resources
        </Link>
      </li>
      <li>
        <Link href="/contact" type="nav">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/about" type="nav">
          About
        </Link>
      </li>
    </Ul>
  );
}
