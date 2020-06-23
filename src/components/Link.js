import { Link as ThemeUILink } from 'theme-ui';
import NextLink from 'next/link';

const Link = ({ children, sx, ...props }) => (
  <NextLink {...props} passHref>
    <ThemeUILink as='a' sx={sx}>
      {children}
    </ThemeUILink>
  </NextLink>
);

export default Link;
