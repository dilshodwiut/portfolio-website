import * as React from "react";
import List from "@/components/atoms/List/List";
import Link from "@/components/atoms/Link/Link";

export default function NavbarLinks(): JSX.Element {
  return (
    <List>
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
    </List>
  );
}
