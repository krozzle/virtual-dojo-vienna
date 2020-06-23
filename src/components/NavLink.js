import { NavLink as ThemeUINavLink } from 'theme-ui';
import NextLink from 'next/link';

const NavLink = ({ children, sx, ...props }) => (
  <NextLink {...props} passHref>
    <ThemeUINavLink as='a' sx={sx}>
      {children}
    </ThemeUINavLink>
  </NextLink>
);

export default NavLink;
