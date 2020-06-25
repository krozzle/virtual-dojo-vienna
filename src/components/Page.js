import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Image, Text, Flex, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import Link from './Link';
import NavLink from './NavLink';
import Contact from './Contact';

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
          <Link
            as='a'
            sx={{
              color: '',
              textDecoration: 'none',
            }}
            href='/https://twitch.tv'
          >
            <Image variant='socials' src='/twitch.png'></Image>
          </Link>
          <Image variant='socials' src='/twitter.png'></Image>
          <Image variant='socials' src='/instagram.png'></Image>
          <Image variant='socials' src='/facebook.png'></Image>
        </Flex>
        <Text variant='footer' sx={{ justifySelf: 'center' }}>
          © {new Date().getFullYear()} Virtual Dojo Vienna
        </Text>
        <Flex
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Text variant='footer'>Vereinsstatuten</Text>
          <Text variant='footer'>Impressum</Text>
        </Flex>
      </Flex>
    </Box>
  </ThemeProvider>
);

export default Page;
