import Ul from "@/components/atoms/Ul/Ul";
import Link from "@/components/atoms/Link/Link";

export default function NavbarLinks(): JSX.Element {
  return (
    <Ul>
      <Link name="Portfolio" href="/portfolio" type="nav" />
      <Link name="About" href="/about" type="nav" />
      <Link name="Blog" href="/blog" type="nav" />
      <Link name="Resources" href="/resources" type="nav" />
      <Link name="Contact" href="/contact" type="nav" />
    </Ul>
  );
}
