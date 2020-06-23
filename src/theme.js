const palette = {
  black: '#000',
  white: '#fff',
  red: '#fa0041',
  border: '#293133',
};

export default {
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [12, 16, 20, 24, 32, 48],
  sizes: {
    container: 960,
  },
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    primary: palette.red,
  },
};
