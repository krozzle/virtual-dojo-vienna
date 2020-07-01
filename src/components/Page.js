import 'reflect-metadata';
import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Image, Text, Flex, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import Link from './Link';
import NavLink from './NavLink';
import Contact from './Contact';
// import pdf from '../../public/statuten_2016.pdf';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Virtual Dojo Vienna</title>
      <link rel='icon' href='/vdv-logo.jpg' />
    </Head>
    <Box
      sx={{
        background: 'black',
        opacity: 0.9,
        py: 4,
        px: 3,
      }}
      as='header'
    >
      <Container>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-around',
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

            <Contact
            // sx={{
            //   justifySelf: 'flex-end',
            // }}
            ></Contact>
            {/* <NavLink href='/prices'>Prices</NavLink> */}
            {/* fused with Memberships!! */}

            {/* <NavLink href='/contact'>Contact Us</NavLink> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
    <main>{children}</main>
    <Box
      sx={{
        width: '100vw',
        position: 'absolute',
        background: 'white',
        color: 'black',
        opacity: 0.65,
        bottom: '0',
        py: 4,
        px: 3,
      }}
      as='footer'
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            // flexDirection: 'column',
          }}
        >
          <Text variant='footer'>Follow us</Text>
          <a href='https://www.twitch.tv/virtualdojovienna'>
            <Image variant='socials' src='/twitch.svg'></Image>
          </a>
          <a href='https://youtube.com/virtualdojovienna'>
            <Image variant='socials' src='/youtube.svg'></Image>
          </a>
          <a href='https://twitter.com/virtualdojo'>
            <Image variant='socials' src='/twitter.svg'></Image>
          </a>
          <a href='https://www.instagram.com/virtualdojovienna'>
            <Image variant='socials' src='/instagram.svg'></Image>
          </a>
          <a href='https://www.facebook.com/VirtualDojoVienna/'>
            <Image variant='socials' src='/facebook.svg'></Image>
          </a>
        </Flex>
        <Text variant='footer' sx={{ justifySelf: 'center' }}>
          © 2010 - {new Date().getFullYear()} Virtual Dojo Vienna
        </Text>
        <Flex
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Link href='/statuten'>
            <Text variant='footer'>Vereinsstatuten</Text>
          </Link>
          <Link href='/impressum'>
            <Text variant='footer'>Impressum</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  </ThemeProvider>
);

export default Page;
