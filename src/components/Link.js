import { Link } from '@chakra-ui/core';
import NextLink from 'next/link';

const Link = ({ ...props }) => (
  <NextLink {...props} passHref>
    <Link as='a'>test</Link>
  </NextLink>
);

export default Link;
