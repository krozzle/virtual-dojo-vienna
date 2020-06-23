import { NavLink as ThemeUINavLink } from 'theme-ui';
import NextLink from 'next/link';

const NavLink = ({ ...props }) => (
  <NextLink {...props} passHref>
    <ThemeUINavLink as='a'>test1</ThemeUINavLink>
  </NextLink>
);

export default NavLink;
