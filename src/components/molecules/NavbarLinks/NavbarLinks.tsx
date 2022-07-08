import Ul from "@/components/atoms/Ul/Ul";
import Link from "@/components/atoms/Link/Link";

export default function NavbarLinks(): JSX.Element {
  return (
    <Ul>
      <Link href="/portfolio" type="nav">
        Portfolio
      </Link>
      <Link href="/about" type="nav">
        About
      </Link>
      <Link href="/blog" type="nav">
        Blog
      </Link>
      <Link href="/resources" type="nav">
        Resources
      </Link>
      <Link href="/contact" type="nav">
        Contact
      </Link>
    </Ul>
  );
}
