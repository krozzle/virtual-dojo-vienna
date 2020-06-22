import { Link } from '@chakra-ui/core';
import NextLink from 'next/link';

const Link = ({ children, ...props }) => (
  <NextLink {...props} passHref>
    <Link as='a'>{children}</Link>
  </NextLink>
);

export default Link;
