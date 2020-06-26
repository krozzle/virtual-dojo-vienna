const palette = {
  black: '#000',
  white: '#fff',
  red: '#fa0041',
  border: '#293133',
};

export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
    fontSizes: [12, 16, 20, 24, 32, 48],
  },
  styles: {
    h1: {
      fontSize: 5,
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
  },
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    primary: palette.red,
    borders: palette.borders,
    modes: {
      dark: {
        text: palette.white,
        background: palette.black,
        primary: palette.red,
      },
    },
  },
  forms: {
    modal: {
      borderColor: 'primary',
      minWidth: '45vw',
      maxWidth: '60vw',
      maxHeight: '55vh',
      minHeight: '35vh',
    },
  },
  images: {
    socials: {
      width: '1.2em',
      height: '1.2em',
      mx: '0.2em',
    },
  },

  sizes: {
    container: 960,
  },
  flex: {},
  text: {
    footer: {
      mx: '0.2em',
      fontSize: '0.85em',
      color: 'black',
      '&:hover': {
        color: 'primary',
      },
    },
  },
  breakpoints: ['null', '768', '1024', '1200'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  links: {
    nav: {
      px: 3,
      py: 2,
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      fontSize: 1,
    },
  },
};

// breakpoints: ['30em', '48em', '62em', '80em'],
// fonts: {
//   heading: '"Avenir Next", sans-serif',
//   body: 'system-ui, sans-serif',
//   mono: 'Menlo, monospace',
// },
// fontSizes: [12, 16, 20, 24, 32, 48],
// sizes: {
//   container: 960,
// },
// colors: {
//   ...palette,
//   text: palette.black,
//   background: palette.white,
//   primary: palette.red,
// },
