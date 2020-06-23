import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Text, Flex, ThemeProvider } from 'theme-ui';
import Link from './Link';
import NavLink from './NavLink';
import theme from '../theme';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Virtual Dojo Vienna</title>
    </Head>
    <Box
      sx={{
        background: 'black',
        opacity: 0.9,
        py: 4,
      }}
      as='header'
    >
      <Container>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            sx={{
              fontFamily: 'body',
              fontSize: 4,
            }}
          >
            <Link
              sx={{
                color: 'white',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              href='/'
            >
              <Text
                as='span'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Virtual Dojo
              </Text>{' '}
              <Text
                as='span'
                sx={{
                  color: 'primary',
                }}
              >
                |
              </Text>{' '}
              Vienna
            </Link>
          </Text>
          <Flex as='nav'>
            <NavLink href='/'>Home</NavLink>

            <NavLink href='/about'>About</NavLink>

            <NavLink href='/memberships'>Memberships</NavLink>

            {/* <NavLink href='/prices'>Prices</NavLink> */}
            {/* fused with Memberships!! */}

            <NavLink href='/contact'>Contact Us</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
    <main>{children}</main>
  </ThemeProvider>
);

export default Page;
