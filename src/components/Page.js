import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Text, Flex, ThemeProvider } from 'theme-ui';
import Link from 'next/link';
import theme from '../theme';
import NavLink from './NavLink';

const Page = () => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Virtual Dojo Vienna</title>
    </Head>
    <Box background='black' opacity='0.9' py='4' as='header'>
      <Container>
        <Flex align='center' justify='space-between'>
          <Text fontFamily='body' fontSize='md'>
            <div>
              <Link
                color='white'
                textDecoration='none'
                textTransform='uppercase'
                href='/'
              >
                <Text as='span' fontWeight='bold'>
                  Virtual Dojo
                </Text>{' '}
                <Text as='span' color='primary'>
                  |
                </Text>{' '}
                Vienna
              </Link>
            </div>
          </Text>
          <Flex as='nav'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>About us</NavLink>
            <NavLink href='/memberships'>Memberships</NavLink>
            <NavLink href='/contact'>Hit us up!</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
    <main></main>
    <Box as='footer'></Box>
  </ThemeProvider>
);

export default Page;
